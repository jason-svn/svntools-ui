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
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={copyScript}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
        >
          {copied ? "Copied!" : "Copy Script"}
        </button>

        {tool.raw && (
          <a
            href={tool.raw}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
          >
            Raw Script
          </a>
        )}

        {tool.github && (
          <a
            href={tool.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
          >
            GitHub
          </a>
        )}
      </div>

      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
        {tool.script || "# No script content provided."}
      </pre>
    </section>
  );
}
