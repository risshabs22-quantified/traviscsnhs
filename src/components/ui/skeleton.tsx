export function BoxSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="box-grid" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skel">
          <div className="skel-sq" />
          <div className="skel-line" />
          <div className="skel-line w2" />
        </div>
      ))}
    </div>
  );
}

export function LoadingAnnouncer({ label }: { label: string }) {
  return (
    <p role="status" aria-live="polite" className="skip" style={{ position: "absolute", left: "-9999px" }}>
      {label}
    </p>
  );
}
