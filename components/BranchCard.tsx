import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";

type Branch = {
  name: string;
  address: string[];
  mapsUrl: string;
  slug?: string;
};

export default function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="group flex h-full flex-col rounded-[2rem] border border-[#dbe5f4] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8FBF5] text-[#0B8F71] transition group-hover:bg-[#FFF1C7]">
        <MapPin size={26} />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-[#172033]">{branch.name}</h3>
      <div className="mt-4 min-h-[100px] text-[#53657A]">
        {branch.address.map((line) => <span key={line} className="block leading-7">{line}</span>)}
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row md:flex-col xl:flex-row">
        {branch.slug && (
          <Link href={`/locations/${branch.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B8F71] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173F35]">
            Branch Details <ArrowRight size={15} />
          </Link>
        )}
        <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dbe5f4] px-5 py-3 text-sm font-semibold text-[#0B8F71] transition hover:bg-[#f8fbff]">
          <Navigation size={15} /> Get Directions
        </a>
      </div>
    </div>
  );
}
