import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <button
          className="footer__back-top"
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          id="btn-scroll-top"
        >
          ↑
        </button>

        <p className="footer__text">
          Hecho con <span className="footer__heart" aria-hidden="true">❤️</span> para la mejor mamá del mundo
        </p>

        <p className="footer__year">
          Día de las Madres {new Date().getFullYear()}
        </p>

        <div className="footer__flowers" aria-hidden="true">
          🌷 🌹 🌸 🌺 🌼
        </div>
      </div>
    </footer>
  );
}

export default Footer;
