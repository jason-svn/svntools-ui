type Props = {
  categories: string[];
  active: string;
  onSelect: (c: string) => void;
};

export default function Sidebar({ categories, active, onSelect }: Props) {
  return (
    <aside className="w-64 border-r bg-white p-4 hidden lg:block">
      <h2 className="text-lg font-semibold mb-3">Categories</h2>
      <ul className="space-y-1 text-sm">
        {categories.map((c) => (
          <li key={c}>
            <button
              onClick={() => onSelect(c)}
              className={`w-full text-left p-2 rounded-md transition ${
                active === c
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
