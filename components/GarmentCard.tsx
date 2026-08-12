import Link from "next/link";

type Garment = {
  name: string;
  icon: string;
};

export default function GarmentCard({
  garment,
}: {
  garment: Garment;
}) {
  const href =
    garment.name === "Bridal Wear"
      ? "/bridal-wear-dry-cleaning-ranchi"
      : "/#pickup";

  return (
    <Link
      href={href}
      className="group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="text-4xl transition group-hover:scale-110">
        {garment.icon}
      </div>

      <h3 className="mt-5 font-bold text-gray-950">
        {garment.name}
      </h3>

      <p className="mt-2 text-sm font-medium text-emerald-600">
        View Care Options
      </p>
    </Link>
  );
}