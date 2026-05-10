import { useEffect, useRef, useState } from "react";
import "./Dedication.css";

function Dedication() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`dedication ${isVisible ? "dedication--visible" : ""}`}
      id="dedication"
    >
      <div className="dedication__glow" aria-hidden="true" />

      <div className="dedication__content">
        <span className="dedication__icon" aria-hidden="true">
          ✨
        </span>
        <h2 className="dedication__title">Para Ti, Mami</h2>
        <div className="dedication__divider" aria-hidden="true" />
        <p className="dedication__text">
          Eres la luz que guía nuestro camino, el corazón que late con amor
          incondicional, y la fuerza que nos inspira cada día. Aunque nos separe
          la distancia, tu amor siempre nos acompaña y esta página es un
          recuerdo eterno de tu amor.
        </p>
        <p className="dedication__text">
          Gracias por cada sacrificio, cada sonrisa, cada noche en vela, cada
          consejo y cada abrazo. Este día es para celebrarte a ti, la persona
          más maravillosa del mundo.
        </p>
        <p className="dedication__signature">
          Con todo nuestro amor, <br />
          <span className="dedication__heart" aria-hidden="true">
            ❤️
          </span>
          <br />
          Julio, Guido, Happy y Sparky
        </p>
      </div>
    </section>
  );
}

export default Dedication;
