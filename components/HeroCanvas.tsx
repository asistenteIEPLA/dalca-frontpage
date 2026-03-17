"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 200;

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // The public folder is served at the root, so path is /photo-framing/[index].webp
      img.src = `/photo-framing/${i + 1}.webp`;
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        setImagesLoaded(loadedCount);
        
        // Draw first frame once it's loaded to ensure something is visible before scrolling
        if (i === 0 && canvasRef.current) {
          drawFrame(0);
        }
      };
      imagesRef.current[i] = img;
    }
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext("2d");
    if (!context) return;
    
    // Attempt to get the image or fallback to the closest previous loaded one
    let targetIndex = Math.floor(index);
    if (!imagesRef.current[targetIndex] || !imagesRef.current[targetIndex]?.complete) {
      // Find the nearest pre-loaded image going backwards
      let found = false;
      for (let i = targetIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i]?.complete) {
          targetIndex = i;
          found = true;
          break;
        }
      }
      if (!found) return; // Wait until something is loaded
    }
    
    const img = imagesRef.current[targetIndex] as HTMLImageElement;
    
    // Update canvas resolution to match window resolution considering devicePixelRatio
    const dpr = window.devicePixelRatio || 1;
    // We only resize if dimensions don't match exactly innerWidth * dpr to avoid clearing canvas arbitrarily
    if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate "contain" aspect ratio fitting
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const offsetX = (canvas.width - drawWidth) / 2;
    const offsetY = (canvas.height - drawHeight) / 2;

    // Save context state cleanly
    context.save();
    
    // Draw the image
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    // Draw Vignette overlay gradient for depth
    const gradient = context.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width * 0.7
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(15, 23, 42, 0.8)"); // overlay with Slate
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Restore context
    context.restore();
  };

  // React to scroll events to render correct frame
  useMotionValueEvent(frameIndex, "change", (latest) => {
    // Only attempt to draw once fully loaded or near complete
    drawFrame(latest);
  });

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      drawFrame(frameIndex.get());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const progressPercentage = Math.round((imagesLoaded / FRAME_COUNT) * 100);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "1000vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* The Frame Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />

        {/* Loading Indicator */}
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0F172A] text-white">
            <span className="font-mono text-sm mb-4 text-gray-400">CARGANDO RECURSOS INDUSTRIALES {progressPercentage}%</span>
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#F57C00] transition-all duration-100 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Title Overlay */}
        <motion.div 
          style={{ opacity: titleOpacity }} 
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-mono text-[#F57C00] tracking-[0.2em] text-sm md:text-base font-semibold uppercase mb-6 drop-shadow-md">
              INGENIERÍA EN ACABADOS
            </span>
            <h1 className="font-inter font-black text-white text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto drop-shadow-2xl">
              Protección extrema.<br />
              <span className="text-gray-300">Estética industrial.</span>
            </h1>
            <p className="font-mono text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
              Pintura Electrostática · Anticorrosivos · Acabados de Alto Rendimiento
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
