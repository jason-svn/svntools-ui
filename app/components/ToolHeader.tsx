type Props = {
  tool: any;
};

export default function ToolHeader({ tool }: Props) {
  return (
    <header className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold">{tool.name}</h1>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">{tool.date}</span>
          {tool.tag && (
            <span className="text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">
              {tool.tag}
            </span>
          )}
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-2xl">
        {tool.description}
      </p>
    </header>
  );
}
