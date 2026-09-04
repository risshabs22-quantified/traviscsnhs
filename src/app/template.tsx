/**
 * Remounts on every navigation, which is what replays `page-in`. Paired with
 * the loader bar at the top of the window, a route change reads as one move:
 * bar fills, new page rises in.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
