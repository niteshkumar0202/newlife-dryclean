type Service = {
  name: string;
  icon: string;
  description: string;
};

export default function ServiceCard({
  service,
}: {
  service: Service;
}) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        {service.icon}
      </div>

      {/* Title */}

      <h3 className="mt-7 text-xl font-bold text-gray-900">
        {service.name}
      </h3>

      {/* Description */}

      <p className="mt-3 min-h-[84px] leading-7 text-gray-600">
        {service.description}
      </p>

      {/* Link */}

      <div className="mt-6 font-semibold text-blue-600 transition group-hover:translate-x-1">
        Explore service →
      </div>

    </div>
  );
}