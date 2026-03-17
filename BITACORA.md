# Bitácora del Proyecto: DALCA Coating

## 1. Visión del Proyecto
Desarrollo de una landing page premium (Single Page Application) enfocada en el nicho industrial de recubrimientos técnicos. La meta es evocar un sentido de perfección ingenieril a través de un diseño "Industrial Light Grey", el uso de una imponente animación con un `<canvas>` logrando estética industrial y alta protección visual, de la mano con tipografías muy claras y técnicas como Inter (para títulos) y JetBrains Mono (para cuerpos de texto técnicos o etiquetas).

## 2. Stack Tecnológico
- **Framework:** Next.js 14+ (App Router) y React.
- **Lenguaje:** TypeScript (Tipado estricto sin uso de 'any').
- **Estilos:** Tailwind CSS con configuración directa de variables CSS y `@theme inline` / `tailwind.config.ts`.
- **Animaciones:** Framer Motion y HTML5 `<canvas>` (para secuencias con alto rendimiento, a 200 FPS interpolados mediante `requestAnimationFrame` o trigger en scroll).
- **Iconografía:** Lucide React.
- **Entorno:** Localhost listo con `npm run dev`.

## 3. Estructura de Archivos
- `app/layout.tsx`: Configuración Root, Metadata definida como `"DALCA Coating | Perfección en Recubrimientos Industriales"`, e inyección de Google Fonts (`Inter`, `JetBrains_Mono` mediante `next/font/google`).
- `app/page.tsx`: Ensamblaje de la arquitectura completa reuniendo el `Navbar`, `HeroCanvas`, `Sectores`, `Stats`, `Process` y `Footer`.
- `app/globals.css`: Variables CSS de colores industriales (`--background: #F4F4F4`, Orange, Onyx, Slate) y ocultación de scrollbars.
- `components/Navbar.tsx`: Navegación con efecto transparente que cambia a un backdrop blur en scroll.
- `components/HeroCanvas.tsx`: El componente central. Renderiza una animación de 200 frames sincronizada con el progreso de scroll (`framer-motion` + Canvas Rendering + Caching pre-carga en JS de las imágenes `/photo-framing/1.webp`...).
- `components/Footer.tsx`: Enlaces orientados a diferentes sectores y contacto.
- `next.config.mjs`: Exportación estándar sin ser "static export", configurado exclusivamente para ser robusto en despliegues Vercel.
- `.gitignore`: Configurado para aislar carpetas autogeneradas, `dist`, `out`, y dependencias (`node_modules`).

## 4. Lógica de renderizado en Canvas (HeroCanvas.tsx)
La animación principal se basó en los siguientes requerimientos fundamentales:
1. **Precarga en caché:** Al iniciar el cliente (`useEffect`), se precargan los 200 fotogramas ubicados en `public/photo-framing/*.webp` en un array estático en memoria (`imagesRef`). Esta técnica evita demoras de renderizado abruptas durante el scroll y nos permite inyectar progresivamente la carga en una barra de estado visual.
2. **Animación en Scroll:** Utilizando `useScroll` de _Framer Motion_, se mapea la posición del scroll de una sección sticky de 1000vh desde [0, 1] al rango [0, 199] a través del hook `useTransform`.
3. **Pintado en Contexto 2D:** Un observador de movimiento `useMotionValueEvent` lanza la operación `drawFrame(index)`. Evaluando el tamaño de ventana (`window.innerWidth` e `innerHeight`), cada imagen se adapta a través de lógicas de "contain" en un context canvas 2D con un aspect ratio adecuado (`Math.min` scale) situándola perfectamente centrada. Finalmente, se dibuja un _vignette radial_ con el color `#0F172A` para dar gran profundidad.

## 5. Pasos de Despliegue en Vercel
1. Ingresar en el repositorio remoto con GitHub (haciendo push de los últimos cambios).
2. En el panel de Vercel, oprimir "Add New Project" y enlazar el repositorio `dalca-frontpage`.
3. Vercel detectará el framework automáticamente como "Next.js".
4. Dejar el comando de Build como está (`next build`) y la carpeta raíz (`./`). 
5. Oprimir "Deploy" y esperar aproximadamente de 1 a 2 minutos para el pase a producción.
