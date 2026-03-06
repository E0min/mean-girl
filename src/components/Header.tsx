import Link from "next/link";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome }: HeaderProps) {
  return (
    <header className={`section-header ${isHome ? "home-header-overlay" : ""}`}>
      <div className="top-nav">
        <Link href="/" className="site-title">
          Mean girls
        </Link>
        <nav className="mini-nav">
          <Link href="/all-films">All Films</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/docs">Docs</Link>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  );
}
