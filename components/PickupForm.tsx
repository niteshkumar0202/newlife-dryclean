"use client";

import { FormEvent, useMemo, useState } from "react";

import { trackEvent } from "@/lib/analytics";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Shirt,
  ShoppingBag,
  User,
} from "lucide-react";

const services = [
  "Dry Cleaning",
  "Steam Press",
  "Garment Polish",
  "Darning / Repair",
  "Bridal Wear Care",
  "Mixed Services",
];

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

type FormData = {
  name: string;
  phone: string;
  whatsapp: string;
  service: string;
  quantity: string;
  pickupDate: string;
  timeSlot: string;
  address: string;
  landmark: string;
  pincode: string;
  instructions: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  whatsapp: "",
  service: "",
  quantity: "",
  pickupDate: "",
  timeSlot: "",
  address: "",
  landmark: "",
  pincode: "",
  instructions: "",
};

export default function PickupForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const minimumDate = useMemo(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  function updateField(
    field: keyof FormData,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
    setSubmitted(false);
  }

  function validateForm() {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      return "Please enter a valid 10-digit Indian mobile number.";
    }

    if (
      form.whatsapp &&
      !/^[6-9]\d{9}$/.test(form.whatsapp)
    ) {
      return "Please enter a valid WhatsApp number.";
    }

    if (!form.service) {
      return "Please select a service.";
    }

    if (!form.quantity || Number(form.quantity) < 1) {
      return "Please enter the approximate number of garments.";
    }

    if (Number(form.quantity) > 100) {
      return "For more than 100 garments, please contact us directly.";
    }

    if (!form.pickupDate) {
      return "Please select a pickup date.";
    }

    if (form.pickupDate < minimumDate) {
      return "Pickup date cannot be in the past.";
    }

    if (!form.timeSlot) {
      return "Please choose a pickup time slot.";
    }

    if (!form.address.trim()) {
      return "Please enter your pickup address.";
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      return "Please enter a valid 6-digit pincode.";
    }

    return "";
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitted(false);

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    const whatsappNumber =
      form.whatsapp || form.phone;

    const message = [
      "NewLife Dryclean - Home Pickup Request",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${whatsappNumber}`,
      `Service: ${form.service}`,
      `Approx. Garments: ${form.quantity}`,
      `Pickup Date: ${form.pickupDate}`,
      `Pickup Time: ${form.timeSlot}`,
      `Address: ${form.address.trim()}`,
      `Landmark: ${form.landmark.trim() || "Not provided"}`,
      `Pincode: ${form.pincode}`,
      `Instructions: ${form.instructions.trim() || "None"}`,
      "",
      "Minimum order: ₹1,000",
      "",
      "Please confirm pickup availability and timing.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/919507111333?text=${encodeURIComponent(message)}`;

    /*
      Analytics event.

      Important:
      We intentionally DO NOT send:
      - customer name
      - phone number
      - WhatsApp number
      - full address
      - special instructions

      Those are personal data and should not be sent
      to Google Analytics.
    */
    trackEvent("pickup_request", {
      service: form.service,
      garments: Number(form.quantity),
      pincode: form.pincode,
      pickup_time: form.timeSlot,
    });

    setSubmitted(true);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function copyPhoneToWhatsApp() {
    updateField("whatsapp", form.phone);
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-gray-200/40">

      {/* ================= HEADER ================= */}

      <div className="border-b border-gray-100 bg-blue-50/70 px-6 py-7 md:px-10">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <ShoppingBag size={23} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-950">
              Schedule Your Home Pickup
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Enter your details below. Your request will be prepared
              as a WhatsApp booking message.
            </p>
          </div>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 p-6 md:p-10"
      >

        {/* ================= CUSTOMER DETAILS ================= */}

        <div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Customer Details
          </p>

          <div className="grid gap-5 md:grid-cols-2">

            <label className="block">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <User size={16} />
                Name *
              </span>

              <input
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(event) =>
                  updateField(
                    "name",
                    event.target.value
                  )
                }
                placeholder="Your full name"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </label>

            <label className="block">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Phone size={16} />
                Mobile Number *
              </span>

              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                value={form.phone}
                onChange={(event) =>
                  updateField(
                    "phone",
                    event.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
                placeholder="10-digit mobile number"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </label>

            <label className="block md:col-span-2">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MessageCircle size={16} />
                WhatsApp Number
              </span>

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={form.whatsapp}
                  onChange={(event) =>
                    updateField(
                      "whatsapp",
                      event.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  placeholder="Leave empty if same as mobile"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={copyPhoneToWhatsApp}
                  disabled={!form.phone}
                  className="shrink-0 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Same as Mobile
                </button>

              </div>

            </label>

          </div>

        </div>

        {/* ================= SERVICE ================= */}

        <div className="border-t border-gray-100 pt-8">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Service Details
          </p>

          <div className="grid gap-5 md:grid-cols-2">

            <label className="block">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Shirt size={16} />
                Service Required *
              </span>

              <select
                value={form.service}
                onChange={(event) =>
                  updateField(
                    "service",
                    event.target.value
                  )
                }
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >

                <option value="">
                  Select service
                </option>

                {services.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}

              </select>

            </label>

            <label className="block">

              <span className="mb-2 text-sm font-semibold text-gray-700">
                Approx. Number of Garments *
              </span>

              <input
                type="number"
                min={1}
                max={100}
                value={form.quantity}
                onChange={(event) =>
                  updateField(
                    "quantity",
                    event.target.value
                  )
                }
                placeholder="Example: 8"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </label>

          </div>

        </div>

        {/* ================= PICKUP SCHEDULE ================= */}

        <div className="border-t border-gray-100 pt-8">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Pickup Schedule
          </p>

          <div className="grid gap-5 md:grid-cols-2">

            <label className="block">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <CalendarDays size={16} />
                Pickup Date *
              </span>

              <input
                type="date"
                min={minimumDate}
                value={form.pickupDate}
                onChange={(event) =>
                  updateField(
                    "pickupDate",
                    event.target.value
                  )
                }
                className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </label>

            <label className="block">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Clock3 size={16} />
                Preferred Time *
              </span>

              <select
                value={form.timeSlot}
                onChange={(event) =>
                  updateField(
                    "timeSlot",
                    event.target.value
                  )
                }
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >

                <option value="">
                  Choose time slot
                </option>

                {timeSlots.map((slot) => (
                  <option
                    key={slot}
                    value={slot}
                  >
                    {slot}
                  </option>
                ))}

              </select>

            </label>

          </div>

        </div>

        {/* ================= ADDRESS ================= */}

        <div className="border-t border-gray-100 pt-8">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Pickup Address
          </p>

          <div className="space-y-5">

            <label className="block">

              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MapPin size={16} />
                Full Address *
              </span>

              <textarea
                rows={3}
                autoComplete="street-address"
                value={form.address}
                onChange={(event) =>
                  updateField(
                    "address",
                    event.target.value
                  )
                }
                placeholder="House / apartment, road, locality"
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </label>

            <div className="grid gap-5 md:grid-cols-2">

              <label className="block">

                <span className="mb-2 text-sm font-semibold text-gray-700">
                  Landmark
                </span>

                <input
                  type="text"
                  value={form.landmark}
                  onChange={(event) =>
                    updateField(
                      "landmark",
                      event.target.value
                    )
                  }
                  placeholder="Nearby landmark"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </label>

              <label className="block">

                <span className="mb-2 text-sm font-semibold text-gray-700">
                  Pincode *
                </span>

                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={6}
                  value={form.pincode}
                  onChange={(event) =>
                    updateField(
                      "pincode",
                      event.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  placeholder="6-digit pincode"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </label>

            </div>

          </div>

        </div>

        {/* ================= SPECIAL INSTRUCTIONS ================= */}

        <div className="border-t border-gray-100 pt-8">

          <label className="block">

            <span className="mb-2 text-sm font-semibold text-gray-700">
              Special Instructions
            </span>

            <textarea
              rows={4}
              value={form.instructions}
              onChange={(event) =>
                updateField(
                  "instructions",
                  event.target.value
                )
              }
              placeholder="Example: stain on jacket sleeve, delicate bridal wear, call before pickup..."
              className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

          </label>

        </div>

        {/* ================= PICKUP INFORMATION ================= */}

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

          <div className="flex gap-3">

            <CheckCircle2
              size={21}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>

              <p className="font-semibold text-gray-950">
                Home Pickup Information
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Home pickup is currently available for orders
                with a minimum value of ₹1,000. Final service
                availability and pickup time will be confirmed
                by NewLife Dryclean.
              </p>

            </div>

          </div>

        </div>

        {/* ================= ERROR ================= */}

        {error && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        {/* ================= SUCCESS ================= */}

        {submitted && !error && (
          <div
            role="status"
            className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700"
          >
            Your booking details have been prepared.
            Complete the request in WhatsApp to send
            it to NewLife Dryclean.
          </div>
        )}

        {/* ================= SUBMIT ================= */}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          <MessageCircle size={20} />
          Continue Booking on WhatsApp
        </button>

        <p className="text-center text-xs leading-5 text-gray-400">
          Submitting this form opens WhatsApp with your booking
          information. The pickup is confirmed only after
          NewLife Dryclean accepts the request.
        </p>

      </form>

    </div>
  );
}