import type { ProjectDetail } from "@/data/projects";

type CodePreviewProps = {
  preview: ProjectDetail["codePreview"];
};

export default function CodePreview({ preview }: CodePreviewProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-surface-variant bg-surface-container-lowest">
      <div className="flex items-center gap-2 border-b border-surface-variant bg-surface-container-high px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-error" />
        <div className="h-3 w-3 rounded-full bg-tertiary" />
        <div className="h-3 w-3 rounded-full bg-primary" />
        <span className="ml-4 text-xs text-on-surface-variant">{preview.fileName}</span>
      </div>
      <div className="overflow-x-auto p-6">
        <pre className="text-sm leading-relaxed text-secondary">
          <code className={`language-${preview.language}`}>{preview.code}</code>
        </pre>
      </div>
    </div>
  );
}
