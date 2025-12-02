type Props = {
  tool: any;
};

export default function ToolHeader({ tool }: Props) {
  return (
    <header className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold">{tool.name}</h1>
        <span className="text-gray-500 text-sm">{tool.date}</span>
      </div>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-2xl">
        {tool.description}
      </p>
    </header>
  );
}
