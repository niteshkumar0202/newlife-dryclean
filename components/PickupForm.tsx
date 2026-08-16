"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, MapPin, MessageCircle, Phone, ShoppingBag, User } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const services = [
  "Dry Cleaning",
  "Steam Press",
  "Garment Polish",
  "Darning / Repair",
  "Bridal Wear Care",
  "Mixed Services",
];

type FormData = {
  name: string;
  phone: string;
  service: string;
  locality: string;
  pickupDate: string;
};

const initialForm: FormData = { name: "", phone: "", service: "", locality: "", pickupDate: "" };

export default function PickupForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");

  const minimumDate = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(form.phone)) return "Please enter a valid 10-digit Indian mobile number.";
    if (!form.service) return "Please select a service.";
    if (!form.locality.trim()) return "Please enter your locality or area in Ranchi.";
    if (!form.pickupDate) return "Please select a preferred pickup date.";
    if (form.pickupDate < minimumDate) return "Pickup date cannot be in the past.";
    return "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    const message = [
      "NewLife Dryclean - Quick Pickup Request",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Locality: ${form.locality.trim()}`,
      `Preferred Date: ${form.pickupDate}`,
      "",
      "Minimum home-pickup order: ₹1,000",
      "Please confirm availability and collect the detailed address / garment information on WhatsApp.",
    ].join("\n");

    trackEvent("pickup_request", { service: form.service, locality_entered: 1 });
    window.open(`https://wa.me/919507111333?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const inputClass = "w-full rounded-2xl border border-[rgba(63,74,43,0.16)] bg-white px-4 py-3.5 text-[#172033] outline-none transition placeholder:text-[#53657A]/55 focus:border-[#16835F] focus:ring-4 focus:ring-[#16835F]/10";

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[rgba(63,74,43,0.16)] bg-white shadow-[0_24px_70px_rgba(63,74,43,0.10)]">
      <div className="border-b border-[rgba(63,74,43,0.16)] bg-[#FFFCF5] px-6 py-7 md:px-9">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16835F] text-white"><ShoppingBag size={23}/></div>
          <div>
            <h3 className="text-xl font-bold text-[#172033]">Book in under a minute</h3>
            <p className="mt-1 text-sm leading-6 text-[#53657A]">Share the essentials now. Our team will collect the detailed address, garment count and special instructions on WhatsApp.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-9">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]"><User size={16}/> Name *</span>
            <input type="text" autoComplete="name" value={form.name} onChange={(e)=>updateField("name",e.target.value)} placeholder="Your name" className={inputClass}/>
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]"><Phone size={16}/> Mobile *</span>
            <input type="tel" inputMode="numeric" autoComplete="tel" maxLength={10} value={form.phone} onChange={(e)=>updateField("phone",e.target.value.replace(/\D/g,""))} placeholder="10-digit mobile number" className={inputClass}/>
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]"><ShoppingBag size={16}/> Service *</span>
            <select value={form.service} onChange={(e)=>updateField("service",e.target.value)} className={inputClass}>
              <option value="">Select service</option>
              {services.map((service)=><option key={service}>{service}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]"><MapPin size={16}/> Locality / Area *</span>
            <input type="text" autoComplete="address-level2" value={form.locality} onChange={(e)=>updateField("locality",e.target.value)} placeholder="e.g. Kanke, Kadru, Lalpur" className={inputClass}/>
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]"><CalendarDays size={16}/> Preferred pickup date *</span>
            <input type="date" min={minimumDate} value={form.pickupDate} onChange={(e)=>updateField("pickupDate",e.target.value)} className={inputClass}/>
          </label>
        </div>

        {error && <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}

        <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16835F] px-6 py-4 font-semibold text-white transition hover:bg-[#087A63] sm:w-auto">
          <MessageCircle size={18}/> Continue on WhatsApp
        </button>
        <p className="mt-4 text-xs leading-5 text-[#53657A]">Pickup availability and timing are confirmed by the NewLife team. Minimum home-pickup order: ₹1,000.</p>
      </form>
    </div>
  );
}
