type Branch = {
  name: string;
  address: string[];
  mapsUrl: string;
};

export default function BranchCard({
  branch,
}: {
  branch: Branch;
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Location icon */}

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
        📍
      </div>

      {/* Branch name */}

      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {branch.name}
      </h3>

      {/* Address */}

      <div className="mt-4 min-h-[100px] text-gray-600">
        {branch.address.map((line) => (
          <span
            key={line}
            className="block leading-7"
          >
            {line}
          </span>
        ))}
      </div>

      {/* Directions */}

      <div className="mt-auto pt-7">

        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Get Directions
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>

    </div>
  );
}