"use client";

import { useState } from "react";

type Props = {
  tool: any;
};

export default function ScriptBody({ tool }: Props) {
  const [copied, setCopied] = useState(false);

  const copyScript = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard && tool.script) {
      navigator.clipboard.writeText(tool.script);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-sm text-gray-700">{tool.description || "No overview available."}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Instruction</h3>
        <div className="text-gray-700 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed whitespace-pre-wrap border border-gray-100 bg-gray-50">
          {tool.script || "# No script content provided."}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Reference</h3>
        <div className="text-sm text-gray-700 space-y-2">
          {tool.raw ? (
            <div>
              <span className="font-medium">Raw:</span>{" "}
              <a href={tool.raw} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {tool.raw}
              </a>
            </div>
          ) : null}

          {tool.github ? (
            <div>
              <span className="font-medium">GitHub:</span>{" "}
              <a href={tool.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {tool.github}
              </a>
            </div>
          ) : null}

          {!tool.raw && !tool.github && <p className="text-gray-500">No external references.</p>}
        </div>
      </div>
    </section>
  );
}
