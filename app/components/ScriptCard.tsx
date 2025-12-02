import Link from "next/link";

type Props = {
  tool: any;
};

export default function ScriptCard({ tool }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">
          {tool.icon || "⚙️"}
        </div>
        <span className="text-sm text-gray-500">{tool.date}</span>
      </div>

      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{tool.name}</h3>

      <p className="text-sm text-gray-600 flex-1 line-clamp-2">
        {tool.description}
      </p>

      <Link
        href={`/tools/${tool.slug}`}
        className="mt-4 inline-block text-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg transition"
      >
        View Script
      </Link>
    </div>
  );
}
