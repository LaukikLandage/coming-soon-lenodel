export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__right">
        © {new Date().getFullYear()} Lenodel Labs. All rights reserved.
      </div>
    </footer>
  );
}
