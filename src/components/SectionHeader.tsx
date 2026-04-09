interface SectionHeaderProps {
  number: string
  label: string
}

export default function SectionHeader({ number, label }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="font-mono text-xs text-accent">{number}</span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
      <span className="h-px flex-1 bg-edge" />
    </div>
  )
}
