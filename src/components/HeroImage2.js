import Image from "next/image";
import React from "react";

function TornTopEdge({ color = "#ffffff", height = 110 }) {
  return (
    <svg
      aria-hidden
      width="100%"
      height={height}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: -height + 1,
        width: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        {/* Sombra proyectada HACIA ARRIBA */}
        <filter id="upShadow" x="-20%" y="-300%" width="140%" height="600%">
          <feDropShadow dx="0" dy="-3" stdDeviation="3" floodColor="rgba(0,0,0,0.25)" />
        </filter>
      </defs>

      {/* Papel (con sombra hacia arriba) */}
      <g filter="url(#upShadow)">
        <path
          d="
            M0,92 
            C25,88 55,100 85,86 
            C120,74 150,98 190,84 
            C230,78 265,98 305,82 
            C340,72 380,98 420,83 
            C460,76 505,99 545,81
            C585,70 625,98 665,80
            C705,72 745,98 785,82
            C825,76 865,98 905,83
            C945,74 985,96 1025,79
            C1065,72 1105,94 1145,86
            C1175,82 1190,88 1200,86
            L1200,120 L0,120 Z
          "
          fill={color}
        />
      </g>

      {/* Realce suave del borde (como fibras de papel) */}
      <path
        d="
          M0,92 
          C25,88 55,100 85,86 
          C120,74 150,98 190,84 
          C230,78 265,98 305,82 
          C340,72 380,98 420,83 
          C460,76 505,99 545,81
          C585,70 625,98 665,80
          C705,72 745,98 785,82
          C825,76 865,98 905,83
          C945,74 985,96 1025,79
          C1065,72 1105,94 1145,86
          C1175,82 1190,88 1200,86
        "
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="4"
      />
    </svg>
  );
}


export default function HeroImage({ children }) {
  return (
    <section className="relative">
      {/* HERO IMAGE */}
      <div className="relative h-[1000px] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg" 
          alt="Nina y Alex"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bottom-6 mx-auto px-6 text-center text-white bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white">Nina & Alex</h1>
        </div>
      </div>

      {/* WHITE SECTION que solapa la imagen */}
      <div className="relative isolate bg-white -mt-6 md:-mt-10">
        {/* Borde rasgado encima de esta sección */}
        <TornTopEdge />

        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
          <h2 className="text-center text-2xl md:text-3xl font-semibold">Con la bendición de Dios y de nuestros padres</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 text-center md:grid-cols-2">
            <div>
              <p className="font-medium">Alicia Chávez Ruiz</p>
              <p className="text-sm opacity-70">Nazario Escobedo Berrones</p>
            </div>
            <div>
              <p className="font-medium">Blanca Esthela Hernández Alvarado</p>
              <p className="text-sm opacity-70">Eusebio Rodríguez Martínez</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}