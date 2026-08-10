import ServiceCard from "@/components/ServiceCard";
import BranchCard from "@/components/BranchCard";
import PickupForm from "@/components/PickupForm";
import GarmentCard from "@/components/GarmentCard";

import Image from "next/image";
const services = [
  {
    name: "Dry Cleaning",
    icon: "👔",
    description:
      "Professional cleaning and garment care for your everyday and special clothing.",
  },
  {
    name: "Steam Press",
    icon: "♨️",
    description:
      "Give your garments a crisp, polished and premium finish.",
  },
  {
    name: "Garment Polish",
    icon: "✨",
    description:
      "Special care to help maintain the appearance of your garments.",
  },
  {
    name: "Darning",
    icon: "🧵",
    description:
      "Garment repair and darning services to help extend the life of your clothes.",
  },
];
const garments = [
  {
    name: "Bridal Wear",
    icon: "👰",
  },
  {
    name: "Party Dresses",
    icon: "👗",
  },
  {
    name: "Formal Suits",
    icon: "🕴️",
  },
  {
    name: "Designer Wear",
    icon: "✨",
  },
  {
    name: "Daily Wear",
    icon: "👕",
  },
];

const branches = [
    {
    name: "Old H.B. Road",
    address: [
      "Shrilok Complex",
      "Near Santevita Hospital",
      "Below Seventh Heaven Hotel",
    ],
    mapsUrl:
      "https://maps.app.goo.gl/ngf2ixtojwwf96wo9",
  },
    {
    name: "Kanke",
    address: [
      "Amiya Apartment, Ground Floor",
      "Opp. Kanke Petrol Pump",
      "Near Premsons Maruti",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.436986358665116,85.31445587645102",
  },
  {
    name: "Kadru",
    address: [
      "Skyline Complex",
      "Beside J.P. Hyundai",
      "Below Soros",
    ],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.35393386655715,85.32143389602744",
     } 
];

export default function Home() {
  return (
    <main>

      {/* ================= NAVIGATION ================= */}

      <nav className="border-b bg-white px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              NewLife Dryclean
            </h1>

            <p className="text-sm text-gray-500">
              Premium Garment Care • Ranchi
            </p>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>

            <a href="#garments" className="hover:text-blue-600">
              Garments
            </a>

            <a href="#how-it-works" className="hover:text-blue-600">
              How It Works
            </a>

            <a href="#locations" className="hover:text-blue-600">
              Locations
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
            <a href="#pickup" className="hover:text-blue-600">
                Book a Pickup
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Book a Pickup
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}

        ```tsx
{/* ================= HERO ================= */}

<section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 px-6 py-16 md:px-12 md:py-24">

  <div className="mx-auto max-w-7xl">

    <div className="grid items-center gap-12 md:grid-cols-2">

      {/* LEFT COLUMN */}

      <div>

        <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>

          <span className="text-sm font-semibold text-blue-700">
            Ranchi's Premium Garment Care
          </span>
        </div>

        <h2 className="text-5xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          Every Outfit
          <br />
          Has a Story.
          <br />
          <span className="text-blue-600">
            Keep It Looking Its Best.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
          Professional garment care for bridal wear, party dresses,
          formal suits, designer outfits and everyday clothing.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <a
            href="#pickup"
            className="rounded-full bg-blue-600 px-8 py-4 text-center font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Book a Pickup
          </a>

          <a
            href="https://wa.me/919507111333"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-200 bg-white px-8 py-4 text-center font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50"
          >
            💬 WhatsApp Us
          </a>

        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">

          <span>✓ Home Pickup</span>

          <span>✓ Minimum Order ₹1,000</span>

          <span>✓ 3 Ranchi Locations</span>

        </div>

      </div>


      {/* RIGHT COLUMN */}

      <div className="relative">

        <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-900/10">

          <Image
            src="/drycleaner.png"
            alt="Professional dry cleaning and garment care"
            width={1200}
            height={800}
            priority
            className="h-[420px] w-full object-cover md:h-[500px]"
          />

        </div>


        {/* Floating information card */}

        <div className="absolute -bottom-6 left-6 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-xl">

          <p className="text-sm font-bold text-gray-900">
            NewLife Dryclean
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Expert Garment Care • Ranchi
          </p>

        </div>

      </div>

    </div>

  </div>

</section>



      {/* ================= SERVICES ================= */}

      <section id="services" className="px-6 py-24 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-600">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Our Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Professional garment care designed to keep your clothes
              looking fresh, clean and well maintained.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <ServiceCard
                key={service.name}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================= GARMENTS ================= */}

      <section
        id="garments"
        className="bg-gray-50 px-6 py-24 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Specialized Care
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Garments We Care For
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From everyday clothing to special occasion outfits,
              every garment deserves the right care.
            </p>

          </div>


          

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {garments.map((garment) => (
              <GarmentCard
                key={garment.name}
                garment={garment}
              />
            ))}

          

          </div>

        </div>

      </section>


      {/* ================= WHY NEWLIFE ================= */}

      <section
        id="about"
        className="px-6 py-24 md:px-12"
      >

        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">

          <div>

            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Why NewLife Dryclean
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Expert Care for Every Garment
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Every garment is different. From delicate bridal wear
              to formal suits and everyday clothing, professional
              garment care helps maintain the look and feel of your clothes.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              NewLife Dryclean provides dry cleaning, steam press,
              garment polish and darning services in Ranchi.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-7">
              <div className="text-3xl">⚙️</div>
              <h3 className="mt-4 font-bold">Advanced Cleaning</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Professional cleaning technology for garment care.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-7">
              <div className="text-3xl">✨</div>
              <h3 className="mt-4 font-bold">Stain Care</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Special attention to stains and garment appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-7">
              <div className="text-3xl">🛡️</div>
              <h3 className="mt-4 font-bold">Fabric Care</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Care designed to protect the appearance of your garments.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-7">
              <div className="text-3xl">🏠</div>
              <h3 className="mt-4 font-bold">Home Pickup</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Convenient pickup service from your location.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="bg-gray-900 px-6 py-24 text-white md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-400">
              Simple Process
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              How It Works
            </h2>

          </div>


          <div className="grid gap-10 md:grid-cols-4">

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                1
              </div>
              <h3 className="mt-5 text-xl font-bold">Book</h3>
              <p className="mt-2 text-gray-400">
                Contact NewLife Dryclean to request a pickup.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                2
              </div>
              <h3 className="mt-5 text-xl font-bold">Pickup</h3>
              <p className="mt-2 text-gray-400">
                Your garments are collected from your location.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                3
              </div>
              <h3 className="mt-5 text-xl font-bold">Expert Care</h3>
              <p className="mt-2 text-gray-400">
                Your garments receive professional care.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                4
              </div>
              <h3 className="mt-5 text-xl font-bold">Delivery</h3>
              <p className="mt-2 text-gray-400">
                Your garments are returned to you.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCATIONS ================= */}

      <section
        id="locations"
        className="px-6 py-24 md:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Find Us
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Our Ranchi Branches
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {branches.map((branch) => (
              <BranchCard
                key={branch.name}
                branch={branch}
              />
            ))}

          </div>

        </div>

      </section>

        <section
          id="pickup"
          className="bg-gray-50 px-6 py-24 md:px-12"
        >
          <div className="mx-auto max-w-4xl">

            <div className="mb-14 text-center">

              <p className="font-semibold uppercase tracking-widest text-blue-600">
                Home Pickup
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Book a Pickup
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Request a convenient pickup from your home in Ranchi.
              </p>

            </div>

            <PickupForm />

          </div>
        </section>
      {/* ================= CALL TO ACTION ================= */}

      <section
        id="contact"
        className="bg-blue-600 px-6 py-24 text-center text-white md:px-12"
      >

        <h2 className="text-4xl font-bold md:text-5xl">
          Your Clothes. Our Expert Care.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
          Home pickup is available with a minimum order of ₹1,000.
          Contact NewLife Dryclean today.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="tel:+919507111333"
            className="rounded-full bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-blue-50"
          >
            📞 Call 9507111333
          </a>

          <a
            href="https://wa.me/919507111333"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-4 font-semibold hover:bg-blue-700"
          >
            💬 WhatsApp Us
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t bg-white px-6 py-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <h2 className="text-xl font-bold">
                NewLife Dryclean
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                Premium Dry Cleaning & Garment Care
                <br />
                Ranchi, Jharkhand
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                Services
              </h3>

              <ul className="mt-4 space-y-2 text-gray-500">
                <li>Dry Cleaning</li>
                <li>Steam Press</li>
                <li>Garment Polish</li>
                <li>Darning</li>
              </ul>
            </div>


            <div>
              <h3 className="font-bold">
                Contact
              </h3>

              <p className="mt-4 text-gray-500">
                📞 9507111333
              </p>

              <p className="mt-2 text-gray-500">
                📍 Ranchi, Jharkhand
              </p>
            </div>

          </div>


          <div className="mt-10 border-t pt-6 text-center text-sm text-gray-400">
            © 2026 NewLife Dryclean. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}