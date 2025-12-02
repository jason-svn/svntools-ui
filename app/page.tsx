"use client";

import { useMemo, useState } from "react";
import toolsData from "./data/tools.json";
import Sidebar from "./components/Sidebar";
import ScriptCard from "./components/ScriptCard";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    (toolsData as any[]).forEach((t) => set.add((t as any).category));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = (toolsData as any[]).filter((tool: any) => {
    const matchCategory = category === "All" || tool.category === category;
    const term = search.toLowerCase();
    const matchSearch =
      tool.name.toLowerCase().includes(term) ||
      tool.description.toLowerCase().includes(term);
    return matchCategory && matchSearch;
  });

  const newest = [...(toolsData as any[])].sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  const mostViewed = [...(toolsData as any[])].sort(
    (a: any, b: any) => b.views - a.views
  ).slice(0, 3);

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <Sidebar
        categories={categories}
        active={category}
        onSelect={setCategory}
      />

      <main className="flex-1 p-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-semibold">SvNTools Helper Scripts</h1>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-80 text-sm"
            placeholder="Search scripts..."
          />
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Newest Scripts</h2>
            <span className="text-xs text-gray-500">More..</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newest.map((tool: any) => (
              <ScriptCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Most Viewed Scripts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mostViewed.map((tool: any) => (
              <ScriptCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">All Scripts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((tool: any) => (
                <ScriptCard key={tool.slug} tool={tool} />
              ))
            ) : (
              <p className="text-sm text-gray-500 col-span-full p-6 border rounded-lg text-center">
                No tools match your search.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
