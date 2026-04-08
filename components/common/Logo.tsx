'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const sizes = {
  sm: { width: 200, height: 44 },
  md: { width: 260, height: 56 },
  lg: { width: 320, height: 68 },
};

export default function Logo({ className = '', size = 'md', variant = 'light' }: LogoProps) {
  const { width, height } = sizes[size];
  const textPrimary = variant === 'light' ? '#FFFFFF' : '#0D2137';
  const textAccent = '#2E86AB';

  return (
    <svg
      viewBox="0 0 320 68"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Leak Detection Lake Norman logo"
    >
      {/* Icon: Water droplet with wave/ripple inside L */}
      <g>
        {/* L shape */}
        <rect x="6" y="8" width="5" height="42" rx="2.5" fill={textAccent} />
        <rect x="6" y="45" width="22" height="5" rx="2.5" fill={textAccent} />

        {/* Droplet sitting on the L */}
        <path
          d="M20 14C20 14 28 26 28 32C28 36.418 24.418 40 20 40C15.582 40 12 36.418 12 32C12 26 20 14 20 14Z"
          fill={textAccent}
          fillOpacity="0.2"
          stroke={textAccent}
          strokeWidth="1.5"
        />

        {/* Ripple lines inside droplet */}
        <path
          d="M15 33C17 31 23 31 25 33"
          stroke={textAccent}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M16.5 36C18 34.5 22 34.5 23.5 36"
          stroke={textAccent}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
        />
      </g>

      {/* "LEAK DETECTION" text */}
      <text
        x="38"
        y="28"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="3"
        fill={textPrimary}
      >
        LEAK DETECTION
      </text>

      {/* "LAKE NORMAN" text */}
      <text
        x="38"
        y="50"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="4"
        fill={textAccent}
      >
        LAKE NORMAN
      </text>
    </svg>
  );
}
