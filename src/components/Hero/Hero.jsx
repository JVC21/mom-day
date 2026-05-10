import { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAlbum = () => {
    const albumSection = document.getElementById("album");
    if (albumSection) {
      albumSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={heroRef}
      className={`hero ${isVisible ? "hero--visible" : ""}`}
      id="hero"
    >
      <div className="hero__bg-pattern" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__icon" aria-hidden="true">
          💐
        </span>
        <p className="hero__subtitle">10 de Mayo</p>
        <h1 className="hero__title">
          Feliz Día <br />
          <span className="hero__title-accent">de las Madres</span>
        </h1>
        <div className="hero__divider" aria-hidden="true" />
        <p className="hero__message">
          Para Jenny Elizabeth, la mujer que nos dio la vida, que nos enseñó a
          amar y a soñar. Este álbum es un pequeño reflejo del inmenso amor que
          sentimos por ti.
        </p>

        <button
          className="hero__cta"
          onClick={scrollToAlbum}
          aria-label="Ver el álbum de fotos"
          id="btn-scroll-album"
        >
          <span className="hero__cta-text">Ver Álbum</span>
          <span className="hero__cta-arrow" aria-hidden="true">
            ↓
          </span>
        </button>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </header>
  );
}

export default Hero;
