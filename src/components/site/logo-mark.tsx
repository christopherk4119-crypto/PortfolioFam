const RINGS = [
  { r: 42, gap: 58 },
  { r: 32.5, gap: 64 },
  { r: 23, gap: 70 },
  { r: 13.5, gap: 78 },
];

type LogoMarkProps = {
  size?: number;
  className?: string;
};

// Vector recreation of the CDigitalStudios mark (concentric signal rings +
// dot) — the source PNG was pasted inline in chat and isn't reachable as a
// file from this environment, so this is redrawn from what's visible.
function LogoMark({ size = 40, className }: LogoMarkProps) {
  const cx = 50;
  const cy = 50;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="CDigitalStudios logo"
    >
      <defs>
        <radialGradient id="logo-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="logo-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <circle cx={cx} cy={cy} r={48} fill="url(#logo-glow)" />

      {RINGS.map((ring) => {
        const circumference = 2 * Math.PI * ring.r;
        const arcLength = (circumference * (360 - ring.gap)) / 360;
        const gapLength = circumference - arcLength;
        return (
          <circle
            key={ring.r}
            cx={cx}
            cy={cy}
            r={ring.r}
            fill="none"
            stroke="url(#logo-ring)"
            strokeWidth={5.5}
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${gapLength}`}
            transform={`rotate(${ring.gap / 2} ${cx} ${cy})`}
          />
        );
      })}

      <circle cx={cx + 14} cy={cy} r={9} fill="#3b82f6" opacity={0.4} />
      <circle cx={cx + 14} cy={cy} r={4.5} fill="#ffffff" />
    </svg>
  );
}

export { LogoMark };
