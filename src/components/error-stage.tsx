import type { ReactNode } from "react";
import { TigerFace } from "@/components/tiger";

export function ErrorStage({
  code,
  kicker,
  title,
  body,
  children,
  detail,
}: {
  code: string;
  kicker: string;
  title: string;
  body: string;
  children?: ReactNode;
  detail?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="main-content">
      <h3>{kicker}</h3>
      <p
        style={{
          fontSize: "clamp(3rem, 10vw, 5.5rem)",
          lineHeight: 1,
          fontWeight: 700,
          color: "var(--color-crimson)",
          margin: "0 0 0.5rem",
        }}
      >
        {code}
      </p>
      <h4>{title}</h4>
      <p>{body}</p>
      {children}
      {detail}
      <div
        style={{
          maxWidth: "16rem",
          marginTop: "2rem",
          background: "var(--color-ink)",
          padding: "1.5rem",
          borderRadius: "0.75rem",
        }}
      >
        <TigerFace asleep className="mx-auto max-w-[11rem]" />
        <p className="tag" style={{ textAlign: "center", color: "var(--color-cream-soft)", margin: "1rem 0 0" }}>
          exit code {code}
          <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.42em] translate-y-[0.1em] bg-ember align-middle" />
        </p>
      </div>
    </section>
  );
}
