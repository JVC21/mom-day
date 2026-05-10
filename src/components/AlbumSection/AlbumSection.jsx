import PhotoCard from '../PhotoCard/PhotoCard';
import { albumPhotos } from '../../data/albumData';
import './AlbumSection.css';

function AlbumSection() {
  return (
    <section className="album" id="album">
      <div className="album__header">
        <span className="album__header-icon" aria-hidden="true">📸</span>
        <h2 className="album__title">Nuestro Álbum de Recuerdos</h2>
        <p className="album__description">
          Cada foto cuenta una historia, cada mensaje es un abrazo. 
          Desliza para recorrer los momentos más hermosos junto a ti.
        </p>
      </div>

      <div className="album__grid">
        {albumPhotos.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} index={index} />
        ))}
      </div>

      <div className="album__divider" aria-hidden="true">
        <span className="album__divider-heart">💖</span>
      </div>
    </section>
  );
}

export default AlbumSection;
