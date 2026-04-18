// components/NeonDivider.js

export default function NeonDivider({ width = 320, color = '#0ff' }) {
  return (
    <svg
      width={width}
      height="12"
      viewBox={`0 0 ${width} 12`}
      fill="none"
      style={{ margin: '2.5em auto', display: 'block' }}
    >
      <defs>
        <linearGradient id="neon" x1="0" y1="6" x2={width} y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="1" />
          <stop offset="1" stopColor={color} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect x="0" y="4" width={width} height="4" rx="2" fill="url(#neon)">
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
