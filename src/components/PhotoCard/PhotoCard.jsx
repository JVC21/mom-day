import { useEffect, useRef, useState } from 'react';
import './PhotoCard.css';

function PhotoCard({ photo, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <article
      ref={cardRef}
      className={`photo-card ${isVisible ? 'photo-card--visible' : ''} ${
        isEven ? 'photo-card--left' : 'photo-card--right'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      id={`photo-card-${photo.id}`}
    >
      <div className="photo-card__image-wrapper">
        <div className={`photo-card__image-skeleton ${imageLoaded ? 'photo-card__image-skeleton--hidden' : ''}`} />
        <img
          src={photo.src}
          alt={photo.alt}
          className={`photo-card__image ${imageLoaded ? 'photo-card__image--loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="photo-card__image-frame" aria-hidden="true" />
      </div>

      <div className="photo-card__content">
        <div className="photo-card__quote-mark" aria-hidden="true">"</div>
        <p className="photo-card__message">{photo.message}</p>
        <div className="photo-card__author-line" aria-hidden="true" />
        <p className="photo-card__author">{photo.author}</p>
      </div>
    </article>
  );
}

export default PhotoCard;
