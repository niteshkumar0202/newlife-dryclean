type Garment = {
  name: string;
  icon: string;
};

export default function GarmentCard({
  garment,
}: {
  garment: Garment;
}) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Icon */}

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        {garment.icon}
      </div>

      {/* Garment name */}

      <h3 className="mt-5 text-lg font-bold text-gray-900">
        {garment.name}
      </h3>

      {/* Small accent */}

      <div className="mx-auto mt-4 h-1 w-8 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-12" />

    </div>
  );
}