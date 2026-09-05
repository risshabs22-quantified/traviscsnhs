import Image from "next/image";
import type { Officer } from "@/lib/content";

export function OfficerRow({ officer }: { officer: Officer }) {
  return (
    <div className="officer-row">
      {officer.photo ? (
        <Image
          src={officer.photo}
          alt={`${officer.name}, ${officer.role}`}
          width={80}
          height={80}
          className="rounded-full"
          style={{ objectPosition: officer.focus ?? "50% 25%" }}
        />
      ) : (
        <div className="officer-fallback">no picture</div>
      )}
      <div>
        <strong style={{ color: "var(--color-ink)" }}>{officer.name}</strong>
        <br />
        {officer.role}
      </div>
    </div>
  );
}
