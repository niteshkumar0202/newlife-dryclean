import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Service = {
  name: string;
  icon: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  service,
}: {
  service: Service;
}) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition group-hover:scale-110">
        {service.icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-950">
        {service.name}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-gray-600">
        {service.description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
        Learn More
        <ArrowRight
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}