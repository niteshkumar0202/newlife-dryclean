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

  const field = "w-full rounded-xl border border-[#173F35]/15 bg-white px-4 py-3 text-sm text-[#172033] outline-none focus:border-[#16835F] focus:ring-4 focus:ring-[#16835F]/10";

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#173F35]/10 bg-[#FFFCF5] p-6 shadow-sm md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#173F35]">
          Service
          <select className={`${field} mt-2`} value={service} onChange={(e)=>setService(e.target.value)}>
            {Object.keys(serviceBase).map((s)=><option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-[#173F35]">
          Garment
          <select className={`${field} mt-2`} value={garment} onChange={(e)=>setGarment(e.target.value)}>
            {Object.keys(garmentMultiplier).map((g)=><option key={g}>{g}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-[#173F35] sm:col-span-2">
          Quantity
          <input className={`${field} mt-2`} type="number" min={1} max={50} value={qty} onChange={(e)=>setQty(Math.max(1, Number(e.target.value)||1))}/>
        </label>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#173F35]/20 pt-5">
        <span className="text-sm text-[#53657A]">Approximate total</span>
        <strong className="font-serif text-2xl text-[#173F35]">{estimate ? `₹${estimate}` : "On request"}</strong>
      </div>
      <p className="mt-3 text-xs leading-5 text-[#53657A]">Estimate only. Final price depends on fabric, embellishment, stain condition and service requirements, and is confirmed by NewLife Dryclean.</p>
    </div>
  );
}
