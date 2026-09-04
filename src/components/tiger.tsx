import { cn } from "@/lib/cn";

/**
 * The chapter mascot. Pointed ears, forehead and cheek stripes, whiskers —
 * the things that actually make a cat read as a tiger rather than a bear.
 * Drawn once here and reused by the 404 and error screens; the favicon at
 * src/app/icon.svg is the same face, simplified for 16px.
 */
export function TigerFace({
  className,
  asleep = false,
}: {
  className?: string;
  /** Flat closed eyes, for the "something went wrong" screens. */
  asleep?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 128 112"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="tiger-fur" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#F2A03D" />
          <stop offset="1" stopColor="#E8752A" />
        </linearGradient>
      </defs>

      {/* ears */}
      <g strokeLinejoin="round" strokeWidth="6">
        <path d="M34 50 26 18 58 34Z" fill="url(#tiger-fur)" stroke="#F2A03D" />
        <path d="M94 50 102 18 70 34Z" fill="url(#tiger-fur)" stroke="#F2A03D" />
        <path d="M37 44 32 27 50 36Z" fill="#8E2C1B" stroke="#8E2C1B" strokeWidth="3" />
        <path d="M91 44 96 27 78 36Z" fill="#8E2C1B" stroke="#8E2C1B" strokeWidth="3" />
      </g>

      {/* head */}
      <ellipse cx="64" cy="62" rx="36" ry="33" fill="url(#tiger-fur)" />

      {/* stripes */}
      <g
        stroke="#2A1710"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.92"
      >
        <path d="M55 31 53 45" />
        <path d="M64 28v15" />
        <path d="M73 31 75 45" />
        <path d="M31 56 45 61" />
        <path d="M30 70 44 71" />
        <path d="M97 56 83 61" />
        <path d="M98 70 84 71" />
      </g>

      {/* muzzle */}
      <ellipse cx="55" cy="80" rx="13" ry="9.5" fill="#FBF6EE" />
      <ellipse cx="73" cy="80" rx="13" ry="9.5" fill="#FBF6EE" />

      {/* eyes */}
      {asleep ? (
        <g stroke="#2A1710" strokeWidth="4.4" strokeLinecap="round" fill="none">
          <path d="M46 58h11" />
          <path d="M71 58h11" />
        </g>
      ) : (
        <>
          <ellipse cx="51.5" cy="58" rx="5" ry="5.6" fill="#2A1710" />
          <ellipse cx="76.5" cy="58" rx="5" ry="5.6" fill="#2A1710" />
          <circle cx="53.2" cy="56.1" r="1.8" fill="#FBF6EE" />
          <circle cx="78.2" cy="56.1" r="1.8" fill="#FBF6EE" />
        </>
      )}

      {/* nose and mouth */}
      <path d="M64 70.5 70.5 76a6.5 6.5 0 0 1-13 0Z" fill="#8E2C1B" />
      <g stroke="#8E2C1B" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M64 82.5v3" />
        <path d="M64 85.5q-4.5 4.5-9 1.5" />
        <path d="M64 85.5q4.5 4.5 9 1.5" />
      </g>

      {/* whiskers */}
      <g stroke="#FBF6EE" strokeWidth="2.4" strokeLinecap="round" opacity="0.85">
        <path d="M40 76 20 71" />
        <path d="M40 81 19 82" />
        <path d="M88 76 108 71" />
        <path d="M88 81 109 82" />
      </g>
    </svg>
  );
}
