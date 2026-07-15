const CX = 50;
const CY = 50;
// Rings share one vertical "opening" plane (x = CX + OPEN_X) rather than a
// fixed angular gap, which is what actually makes the arcs read as nested
// C-brackets converging on the dot instead of concentric circles with
// unrelated notches.
const OPEN_X = 12;
const RING_RADII = [44, 34, 24, 16];
const STROKE_WIDTH = 5;

function ringProps(r: number) {
  const halfGapDeg = (Math.acos(OPEN_X / r) * 180) / Math.PI;
  const gapDeg = 2 * halfGapDeg;
  const circumference = 2 * Math.PI * r;
  const arcLength = (circumference * (360 - gapDeg)) / 360;
  const gapLength = circumference - arcLength;
  return {
    dasharray: `${arcLength.toFixed(1)} ${gapLength.toFixed(1)}`,
    rotate: gapDeg / 2,
  };
}

type LogoMarkProps = {
  size?: number;
  className?: string;
};

// Vector recreation of the CDigitalStudios mark (concentric signal rings
// opening onto a glowing dot in a small rounded badge) — the source image
// was pasted inline in chat and isn't reachable as a file from this
// environment, so this is redrawn from what's visible.
function LogoMark({ size = 40, className }: LogoMarkProps) {
  const badgeCx = CX + OPEN_X + 7;

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
          <stop offset="100%" stopColor="#2f63e0" />
        </linearGradient>
        <linearGradient id="logo-badge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
        <radialGradient id="logo-dot-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r={48} fill="url(#logo-glow)" />
      <circle
        cx={38}
        cy={34}
        r={26}
        fill="#ffffff"
        opacity={0.08}
        filter="blur(6px)"
      />

      {RING_RADII.map((r) => {
        const { dasharray, rotate } = ringProps(r);
        return (
          <circle
            key={r}
            cx={CX}
            cy={CY}
            r={r}
            fill="none"
            stroke="url(#logo-ring)"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={dasharray}
            transform={`rotate(${rotate} ${CX} ${CY})`}
          />
        );
      })}

      <rect
        x={badgeCx - 11}
        y={CY - 11}
        width={22}
        height={22}
        rx={7}
        fill="url(#logo-badge)"
      />
      <circle cx={badgeCx} cy={CY} r={9} fill="url(#logo-dot-halo)" />
      <circle cx={badgeCx} cy={CY} r={4} fill="#ffffff" />
    </svg>
  );
}

export { LogoMark };
