type Props = {
  tool: any;
};

export default function ToolHeader({ tool }: Props) {
  return (
    <header className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-lg bg-blue-100 flex items-center justify-center text-3xl">
          {tool.icon || "⚙️"}
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{tool.name}</h1>
          <span className="text-gray-500 text-sm">{tool.date}</span>
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-2xl">
        {tool.description}
      </p>
    </header>
  );
}
