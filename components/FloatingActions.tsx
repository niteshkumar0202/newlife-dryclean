"use client";

import { MessageCircle, Phone, ShoppingBag } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-3 gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl md:hidden">

      <a
        href="tel:+919507111333"
        className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-xs font-semibold text-gray-700"
      >
        <Phone size={19} className="text-emerald-600" />
        Call
      </a>

      <a
        href="https://wa.me/919507111333"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-3 text-xs font-semibold text-gray-700"
      >
        <MessageCircle size={19} className="text-green-600" />
        WhatsApp
      </a>

      <a
        href="#pickup"
        className="flex flex-col items-center justify-center gap-1 rounded-xl bg-emerald-600 px-2 py-3 text-xs font-semibold text-white"
      >
        <ShoppingBag size={19} />
        Book Pickup
      </a>

    </div>
  );
}