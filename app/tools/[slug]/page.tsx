import toolsData from "../../data/tools.json";
import ScriptCard from "../../components/ScriptCard";
import ToolHeader from "../../components/ToolHeader";
import ScriptBody from "../../components/ScriptBody";

type Props = {
  params: { slug: string };
};

export default function ToolPage({ params }: Props) {
  const tool = (toolsData as any[]).find((t: any) => t.slug === params.slug);

  if (!tool) {
    return <div className="p-10 text-center">Tool not found.</div>;
  }

  const related = (toolsData as any[])
    .filter((t: any) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <ToolHeader tool={tool} />
        <ScriptBody tool={tool} />

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Related Scripts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r: any) => (
                <ScriptCard key={r.slug} tool={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
