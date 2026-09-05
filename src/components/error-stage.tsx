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
}) {
  return (
    <div>
      <h2 className="section-label">{kicker}</h2>
      <p
        style={{
          fontSize: "clamp(2.4rem, 8vw, 4.2rem)",
          lineHeight: 1,
          fontWeight: 700,
          color: "var(--color-crimson)",
          margin: "0 0 0.4rem",
        }}
      >
        {code}
      </p>
      <p style={{ fontWeight: 700, color: "var(--color-ink)", margin: "0 0 0.4rem" }}>{title}</p>
      <p className="lead">{body}</p>
      {children}
      {detail}
      <div
        className="box"
        style={{ maxWidth: "14rem", background: "var(--color-ink)", marginBottom: "1rem" }}
      >
        <div style={{ padding: "1rem" }}>
          <TigerFace asleep className="mx-auto max-w-[9rem]" />
          <p
            className="tag"
            style={{ textAlign: "center", color: "var(--color-cream-soft)", margin: "0.75rem 0 0" }}
          >
            exit code {code}
            <span className="animate-caret ml-1 inline-block h-[0.9em] w-[0.42em] translate-y-[0.1em] bg-ember align-middle" />
          </p>
        </div>
      </div>
    </div>
  );
}
