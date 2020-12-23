import galleryImages from '../constants';
import shuffle from '../utils';
/* eslint-disable jsx-a11y/alt-text */
const Gallery = () => (
  <section id="galleries">

    <div className="gallery">

      <header>
        <h1>Gallery</h1>
        <ul className="tabs">
          <li><a data-tag="all" className="button active">All</a></li>
          <li><a data-tag="watercolour" className="button">Watercolour</a></li>
          <li><a data-tag="digital" className="button">Digital</a></li>
          <li><a data-tag="announcement" className="button">Announcement Cards</a></li>
          <li><a data-tag="event" className="button">Event Stationary</a></li>
          <li><a data-tag="live" className="button">Live</a></li>
          <li><a data-tag="cakes" className="button">Cakes & Cookies</a></li>
        </ul>
      </header>

      <div className="content">
        {shuffle(galleryImages).map(({
          title, imageClass, full, thumbs,
        }) => (
          <div key={`${imageClass}-${full}`} className={`media all ${imageClass}`}>
            <a href={`images/${imageClass}/full/${full}`}>
              <img
                title={title}
                src={`images/${imageClass}/thumbs/${thumbs}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
