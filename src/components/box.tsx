import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function BoxGrid({
  children,
  cols,
}: {
  children: ReactNode;
  cols?: 2;
}) {
  return <div className={cols === 2 ? "box-grid cols-2" : "box-grid"}>{children}</div>;
}

export function Box({
  href,
  image,
  alt,
  title,
  children,
  priority,
  external,
  media,
  focus,
  contain,
  emptyLabel,
}: {
  href?: string;
  image?: string;
  alt?: string;
  title?: string;
  children?: ReactNode;
  priority?: boolean;
  external?: boolean;
  media?: boolean;
  focus?: string;
  contain?: boolean;
  emptyLabel?: string;
}) {
  const inner = (
    <>
      {(image || media || emptyLabel) && (
        <div className={contain ? "box-media contain" : "box-media"}>
          {image ? (
            <Image
              src={image}
              alt={alt ?? ""}
              fill
              sizes="(min-width: 64em) 18vw, (min-width: 42em) 30vw, 50vw"
              priority={priority}
              className={contain ? "object-contain" : "object-cover"}
              style={
                contain
                  ? { objectFit: "contain", padding: "10%" }
                  : focus
                    ? { objectPosition: focus }
                    : undefined
              }
            />
          ) : emptyLabel ? (
            <span className="box-media-empty">{emptyLabel}</span>
          ) : null}
        </div>
      )}
      {(title || children) && (
        <div className="box-body">
          {title && <h3>{title}</h3>}
          {children}
        </div>
      )}
    </>
  );

  if (href && (external || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        className="box"
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className="box">
        {inner}
      </Link>
    );
  }
  return <article className="box">{inner}</article>;
}
