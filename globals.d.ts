// globals.d.ts
// Declaraciones para archivos CSS en Next.js + TypeScript

// Para imports normales de CSS (Tailwind, etc.)
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Para side-effect imports como import './globals.css';
declare module '*.css';