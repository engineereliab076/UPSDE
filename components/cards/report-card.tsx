import { FileText } from "lucide-react";

interface ReportCardProps {
  title: string;
  description: string;
  /** When a real file exists, pass its URL to enable the download link. */
  fileUrl?: string;
}

export function ReportCard({ title, description, fileUrl }: ReportCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-line bg-card p-6">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary-soft">
        <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
        {description}
      </p>
      {fileUrl ? (
        <a
          href={fileUrl}
          className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Download
        </a>
      ) : (
        <p className="mt-4 inline-flex w-fit items-center rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
          Coming soon
        </p>
      )}
    </div>
  );
}
