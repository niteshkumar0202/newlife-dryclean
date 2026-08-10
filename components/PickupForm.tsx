"use client";


import { useState } from "react";

export default function PickupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [area, setArea] = useState("");
const [service, setService] = useState("");
const [garments, setGarments] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl">

        <div className="grid md:grid-cols-5">

          {/* LEFT SIDE */}
          <div className="bg-blue-600 p-8 text-white md:col-span-2 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              NewLife Dryclean
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight">
              Convenient garment care, right from your home.
            </h3>

            <p className="mt-5 leading-7 text-blue-100">
              Tell us what you need and our team will contact you
              to arrange a convenient pickup from your location.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  🚚
                </div>

                <div>
                  <p className="font-semibold">
                    Home Pickup
                  </p>
                  <p className="mt-1 text-sm text-blue-100">
                    Convenient pickup from your area
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  👔
                </div>

                <div>
                  <p className="font-semibold">
                    Expert Garment Care
                  </p>
                  <p className="mt-1 text-sm text-blue-100">
                    Dry cleaning, pressing and garment care
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  ₹
                </div>

                <div>
                  <p className="font-semibold">
                    Minimum Order ₹1,000
                  </p>
                  <p className="mt-1 text-sm text-blue-100">
                    Applicable for home pickup
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="p-8 md:col-span-3 md:p-10">

            {submitted ? (

              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Pickup Request Received
                </h3>

                <p className="mt-3 max-w-md leading-7 text-gray-600">
                  Thank you for choosing NewLife Dryclean.
                  Our team will contact you shortly to confirm
                  your pickup.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
                >
                  Submit Another Request
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div>
                  <h3 className="text-2xl font-bold">
                    Book a Pickup
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Fill in your details and we'll get in touch.
                  </p>
                </div>


                {/* NAME + PHONE */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>


                {/* AREA */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Pickup Area
                  </label>

                  <input
                    type="text"
                    name="area"
                    required
                    placeholder="e.g. Kanke, Kadru, Lalpur"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Don't see your area? Enter it anyway — we'll check pickup availability.
                  </p>
                </div>


                {/* SERVICE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Service Required
                  </label>

                  <select
                    name="service"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="dry-cleaning">
                      Dry Cleaning
                    </option>

                    <option value="steam-press">
                      Steam Press
                    </option>

                    <option value="garment-polish">
                      Garment Polish
                    </option>

                    <option value="darning">
                      Darning
                    </option>

                    <option value="multiple">
                      Multiple Services
                    </option>
                  </select>
                </div>


                {/* GARMENTS */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    What would you like cleaned?
                  </label>

                  <textarea
                    name="garments"
                    rows={3}
                    placeholder="e.g. 2 suits, 1 saree, 3 shirts..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
                >
                  Request Home Pickup →
                </button>

                <p className="text-center text-xs text-gray-500">
                  Minimum order ₹1,000 for home pickup
                </p>

              </form>

            )}

          </div>

        </div>

      </div>
    </div>
  );
}