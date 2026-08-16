"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  { title: "See genuine customer feedback", text: "Read recent NewLife Dryclean feedback directly on Google before you book." },
  { title: "Share your experience", text: "Already used NewLife? Your Google review helps other Ranchi customers choose with confidence." },
  { title: "Local trust matters", text: "Branch presence, real directions and public reviews are stronger trust signals than invented testimonials." },
];

export default function ReviewsCarousel({ googleUrl }: { googleUrl: string }) {
  const [i,setI]=useState(0);
  const slide=slides[i];
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="rounded-3xl border border-[#173F35]/10 bg-white p-8 text-center shadow-sm md:p-10">
        <div className="mx-auto flex w-fit gap-1 text-[#C99A2E]">{[0,1,2,3,4].map(x=><Star key={x} size={17} fill="currentColor"/>)}</div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-[#173F35]">{slide.title}</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#53657A]">{slide.text}</p>
        <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md bg-[#16835F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#087A63]">
          Open Google Reviews
        </a>
      </div>
      <div className="mt-5 flex justify-center gap-3">
        <button aria-label="Previous review slide" className="grid h-10 w-10 place-items-center rounded-full border border-[#173F35]/15 bg-white text-[#173F35]" onClick={()=>setI((i-1+slides.length)%slides.length)}><ChevronLeft size={18}/></button>
        <button aria-label="Next review slide" className="grid h-10 w-10 place-items-center rounded-full border border-[#173F35]/15 bg-white text-[#173F35]" onClick={()=>setI((i+1)%slides.length)}><ChevronRight size={18}/></button>
      </div>
    </div>
  )
}
