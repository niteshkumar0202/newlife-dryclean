"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/carousel-garments/navy-suit.png", alt: "Navy formal suit for professional dry cleaning", label: "Suits & Blazers" },
  { src: "/carousel-garments/camel-coat.png", alt: "Camel wool coat for professional dry cleaning", label: "Coats & Jackets" },
  { src: "/carousel-garments/white-shirt.png", alt: "White formal shirt for professional garment care", label: "Shirts" },
  { src: "/carousel-garments/green-saree.png", alt: "Green silk saree with gold detailing for specialist dry cleaning", label: "Sarees" },
  { src: "/carousel-garments/woolen-wear.png", alt: "Premium woolen garments for professional garment care", label: "Woolen Wear" }
];

export default function HomeImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const relativeOffset = (i: number) => {
    let d = i - active;
    const half = Math.floor(slides.length / 2);
    if (d > half) d -= slides.length;
    if (d < -half) d += slides.length;
    return d;
  };

  const go = (step: number) => setActive((i) => (i + step + slides.length) % slides.length);

  return (
    <section className="overflow-hidden bg-[#FFFCF5] px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C99A2E]">NewLife Garment Care</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#173F35] sm:text-4xl">Care You Can See</h2>
        </div>

        <div className="relative mx-auto h-[430px] max-w-6xl sm:h-[520px] lg:h-[620px]">
          {slides.map((slide, i) => {
            const offset = relativeOffset(i);
            const visible = Math.abs(offset) <= 2;
            const transforms: Record<number, string> = {
              [-2]: "translateX(-92%) scale(.70) rotateY(7deg)",
              [-1]: "translateX(-52%) scale(.86) rotateY(4deg)",
              [0]: "translateX(0) scale(1)",
              [1]: "translateX(52%) scale(.86) rotateY(-4deg)",
              [2]: "translateX(92%) scale(.70) rotateY(-7deg)",
            };
            const opacity: Record<number, number> = {[-2]:.55,[-1]:.82,[0]:1,[1]:.82,[2]:.55};
            const depth: Record<number, number> = {[-2]:10,[-1]:20,[0]:30,[1]:20,[2]:10};

            return (
              <button key={slide.src} type="button" onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                className="absolute left-1/2 top-1/2 block h-[370px] w-[70%] overflow-hidden rounded-[1.75rem] border border-[#C99A2E]/25 bg-[#FFFDF8] shadow-2xl transition-all duration-700 ease-out sm:h-[440px] sm:w-[52%] lg:h-[540px] lg:w-[42%]"
                style={{
                  transform: `translate(-50%, -50%) ${transforms[offset] ?? "scale(.55)"}`,
                  opacity: visible ? opacity[offset] : 0,
                  zIndex: visible ? depth[offset] : 0,
                  pointerEvents: visible ? "auto" : "none",
                }}>
                <Image src={slide.src} alt={slide.alt} fill
                  sizes="(max-width:640px) 68vw, (max-width:1024px) 52vw, 40vw"
                  className="object-contain p-2 sm:p-3" priority={i === 0} />
                <div className="pointer-events-none absolute inset-2 rounded-[1.35rem] ring-1 ring-[#16835F]/10 sm:inset-3" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#173F35]/85 via-[#173F35]/55 to-transparent px-5 pb-5 pt-16 text-center">
                  <p className="font-serif text-lg font-semibold text-white sm:text-xl">{slide.label}</p>
                </div>
              </button>
            );
          })}

          <button onClick={() => go(-1)} aria-label="Previous image"
            className="absolute left-1 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/95 px-4 py-3 text-2xl font-bold text-[#16835F] shadow-lg sm:left-4">‹</button>
          <button onClick={() => go(1)} aria-label="Next image"
            className="absolute right-1 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/95 px-4 py-3 text-2xl font-bold text-[#16835F] shadow-lg sm:right-4">›</button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === active ? "w-8 bg-[#C99A2E]" : "w-2.5 bg-[#16835F]/25"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
