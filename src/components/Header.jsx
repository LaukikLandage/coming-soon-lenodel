export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header__logo">
        <span className="header__logo-dot" />
        Lenodel Labs
      </div>
      <nav className="header__social">
        <a
          href="https://www.instagram.com/lenodellabs.com_/"
          target="_blank"
          rel="noopener noreferrer"
          className="header__social-link"
          id="instagram-link"
          aria-label="Follow us on Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
