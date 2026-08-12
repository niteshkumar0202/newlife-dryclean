"use client";

import { useMemo, useState } from "react";

const serviceBase: Record<string, number> = {
  "Dry Cleaning": 70,
  "Steam Press": 35,
  "Garment Polish": 60,
};

const garmentMultiplier: Record<string, number> = {
  Shirt: 1,
  "T-Shirt": 1,
  Trouser: 1.2,
  Saree: 3,
  Lehenga: 4,
  Suit: 2.5,
  Blazer: 2,
  Jacket: 1.5,
  Curtain: 2,
  Blanket: 2.2,
};

export default function PricingEstimator() {
  const [service, setService] = useState("Dry Cleaning");
  const [garment, setGarment] = useState("Shirt");
  const [qty, setQty] = useState(1);

  const estimate = useMemo(() => {
    const base = serviceBase[service];
    const mult = garmentMultiplier[garment];
    if (!base || !mult) return null;
    return Math.round(base * mult * Math.max(1, qty));
  }, [service, garment, qty]);

  const field = "w-full rounded-xl border border-[#3F4A2B]/15 bg-white px-4 py-3 text-sm text-[#2A2C24] outline-none focus:border-[#6B7C4A] focus:ring-4 focus:ring-[#6B7C4A]/10";

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#3F4A2B]/10 bg-[#F7F8F2] p-6 shadow-sm md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#3F4A2B]">
          Service
          <select className={`${field} mt-2`} value={service} onChange={(e)=>setService(e.target.value)}>
            {Object.keys(serviceBase).map((s)=><option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-[#3F4A2B]">
          Garment
          <select className={`${field} mt-2`} value={garment} onChange={(e)=>setGarment(e.target.value)}>
            {Object.keys(garmentMultiplier).map((g)=><option key={g}>{g}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-[#3F4A2B] sm:col-span-2">
          Quantity
          <input className={`${field} mt-2`} type="number" min={1} max={50} value={qty} onChange={(e)=>setQty(Math.max(1, Number(e.target.value)||1))}/>
        </label>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#3F4A2B]/20 pt-5">
        <span className="text-sm text-[#5B5E51]">Approximate total</span>
        <strong className="font-serif text-2xl text-[#3F4A2B]">{estimate ? `₹${estimate}` : "On request"}</strong>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#5B5E51]">Estimate only. Final price depends on fabric, embellishment, stain condition and service requirements, and is confirmed by NewLife Dryclean.</p>
    </div>
  );
}
