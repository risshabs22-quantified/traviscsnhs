import Link from "next/link";

export function Crumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href}>
              {i > 0 ? <span aria-hidden="true">/</span> : null}{" "}
              {last ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
