import type { LucideIcon } from "lucide-react";

type ContactInfoTileProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

function ContactInfoTile({ icon: Icon, label, value, href }: ContactInfoTileProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 card-glass p-5 transition-colors hover:border-blue-400/30">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/20 ring-1 ring-blue-400/30">
        <Icon className="h-5 w-5 text-blue-300" />
      </div>
      <div>
        <div className="font-ui text-xs font-medium tracking-wide text-zinc-500 uppercase">
          {label}
        </div>
        <div className="mt-0.5 text-base font-semibold text-white">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

export { ContactInfoTile };
