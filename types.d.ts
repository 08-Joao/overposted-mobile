// types.d.ts

// Declaração para arquivos de imagem PNG
declare module "*.png" {
  const value: string;
  export default value;
}

// Declaração para arquivos de imagem JPEG
declare module "*.jpg" {
  const value: string;
  export default value;
}

// Declaração para arquivos de imagem GIF
declare module "*.gif" {
  const value: string;
  export default value;
}

// Declaração para arquivos de imagem SVG
declare module "*.svg" {
  import React from "react";
  import { SVGProps } from "react";
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}

// Declaração para arquivos de áudio MP3
declare module "*.mp3" {
  const value: string;
  export default value;
}

// Declaração para arquivos de vídeo MP4
declare module "*.mp4" {
  const value: string;
  export default value;
}

// Declaração para arquivos de fonte (por exemplo, .ttf)
declare module "*.ttf" {
  const value: string;
  export default value;
}

// Declaração para arquivos JSON
declare module "*.json" {
  const value: any;
  export default value;
}

// Declaração para arquivos CSS, se necessário (menos comum em React Native)
declare module "*.css" {
  const value: string;
  export default value;
}
