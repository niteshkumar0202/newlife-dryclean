"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight, Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#dbe5f4] bg-white shadow-[0_28px_70px_rgba(30,64,175,0.12)]">
        <div className="relative aspect-[16/10] select-none overflow-hidden bg-[#eef5ff]">
          <Image src="/shirt-before-dirty.png" alt="Illustrative dirty shirt before professional cleaning" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-center" />

          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <Image src="/shirt-after-clean.png" alt="Illustrative clean shirt after professional cleaning" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-center" />
          </div>

          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,.12)]" style={{ left: `${position}%` }}>
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#1557c0] text-white shadow-xl">
              <ArrowLeftRight size={19} />
            </div>
          </div>

          <div className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">Before · Dirty</div>
          <div className="absolute right-5 top-5 rounded-full bg-green-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">After · Clean</div>

          <input aria-label="Compare dirty shirt before cleaning with clean shirt after cleaning" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe5f4] bg-white px-4 py-2 text-sm font-semibold text-[#1557c0] shadow-sm">
          <Sparkles size={16} className="text-[#c79a2b]" />
          Before & After
        </div>
        <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#10234a] md:text-5xl">See the NewLife<span className="block text-[#1557c0]">Difference.</span></h2>
        <p className="mt-6 leading-8 text-[#5B5E51]">Drag the slider to compare a visibly soiled shirt with a fresh, professionally finished shirt.</p>
        <div className="mt-7 rounded-2xl border border-[#e2eaf6] bg-[#f6f9ff] p-5 text-sm leading-6 text-[#5B5E51]"><strong className="text-[#10234a]">Illustrative image:</strong> replace this visual with real NewLife before-and-after photographs as you collect them for the strongest customer trust.</div>
        <a href="#pickup" className="mt-8 inline-flex rounded-full bg-[#1557c0] px-7 py-4 font-semibold text-white transition hover:bg-[#0f469d]">Book Garment Care</a>
      </div>
    </div>
  );
}
