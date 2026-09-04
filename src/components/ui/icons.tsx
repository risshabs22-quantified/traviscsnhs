import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.4" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M5 12h13" />
      <path d="M12.5 5.8 18.8 12l-6.3 6.2" />
    </svg>
  );
}

export function ExternalIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M13.5 5.5H18.5V10.5" />
      <path d="M18.5 5.5 11 13" />
      <path d="M18 14.5V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.6" />
    </svg>
  );
}

export function MailIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="3" />
      <path d="m4.5 8.5 6.4 4.4a2 2 0 0 0 2.2 0l6.4-4.4" />
    </svg>
  );
}

export function ChatIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M20.5 12.2c0 4-3.8 7.2-8.5 7.2a10 10 0 0 1-2.6-.34L4.2 20.5l1.1-3.5A6.9 6.9 0 0 1 3.5 12.2C3.5 8.2 7.3 5 12 5s8.5 3.2 8.5 7.2Z" />
    </svg>
  );
}

export function CardIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="3" />
      <path d="M2.8 9.8h18.4" />
      <path d="M6.5 14.6h3.6" />
    </svg>
  );
}

export function TerminalIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="2.8" y="4.5" width="18.4" height="15" rx="3.4" />
      <path d="m7.4 10 2.7 2.4-2.7 2.4" />
      <path d="M13.2 15h3.6" />
    </svg>
  );
}

export function UsersIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <circle cx="9.4" cy="8.6" r="3.4" />
      <path d="M3.4 19.4c0-3.1 2.7-5.2 6-5.2s6 2.1 6 5.2" />
      <path d="M16.2 5.7a3.2 3.2 0 0 1 .3 6.2" />
      <path d="M18.4 14.9c1.4.8 2.2 2.1 2.2 3.7" />
    </svg>
  );
}

export function TrophyIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M7.5 4.5h9v4.8a4.5 4.5 0 0 1-9 0z" />
      <path d="M7.5 6.2H5.2a2.4 2.4 0 0 0 2.3 3.2" />
      <path d="M16.5 6.2h2.3a2.4 2.4 0 0 1-2.3 3.2" />
      <path d="M12 13.8v3.4" />
      <path d="M8.6 19.5h6.8" />
    </svg>
  );
}

export function CalendarIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3.4" y="5.2" width="17.2" height="15" rx="3.2" />
      <path d="M3.4 10h17.2" />
      <path d="M8.4 3.4v3.4M15.6 3.4v3.4" />
    </svg>
  );
}
