/* eslint-disable jsx-a11y/alt-text */
const Gallery = () => (
  <section id="galleries">

    <div className="gallery">

      <header>
        <h1>Gallery</h1>
        <ul className="tabs">
          <li><a href="#" data-tag="all" className="button active">All</a></li>
          <li><a href="#" data-tag="watercolor" className="button">Watercolour</a></li>
          <li><a href="#" data-tag="digital" className="button">Digital</a></li>
          <li><a href="#" data-tag="cards" className="button">Announcement Cards</a></li>
          <li><a href="#" data-tag="event" className="button">Event Stationary</a></li>
          <li><a href="#" data-tag="live" className="button">Live</a></li>
          <li><a href="#" data-tag="cakes" className="button">Cakes</a></li>
        </ul>
      </header>

      <div className="content">
        <div className="media all event">
          <a href="images/event/full/01.jpg">
            <img
              title="Personalised event stationary"
              src="images/event/thumbs/01.jpg"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/02.jpg">
            <img
              title="Christening mini tag"
              src="images/event/thumbs/02.png"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/03.jpg">
            <img
              title="Christening card enlarged"
              src="images/event/thumbs/03.png"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/04.jpg">
            <img
              title="Kitchen tea invitation"
              src="images/event/thumbs/04.png"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/05.jpg">
            <img
              title="Bridal shower invitation"
              src="images/event/thumbs/05.png"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/09.jpg">
            <img
              title="Bridal shower invitation"
              src="images/event/thumbs/09.png"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/07.jpg">
            <img
              title="Christening seating board"
              src="images/event/thumbs/07.jpg"
            />
          </a>
        </div>
        <div className="media all event">
          <a href="images/event/full/08.jpg">
            <img
              title="Bridal shower seating cards"
              src="images/event/thumbs/08.png"
            />
          </a>
        </div>
        <div className="media all live">
          <a href="images/live/full/01.jpg">
            <img
              title="Bridal shower welcome card"
              src="images/live/thumbs/01.png"
            />
          </a>
        </div>
        <div className="media all live">
          <a href="images/live/full/02.jpg">
            <img
              title="Bridal shower welcome card"
              src="images/live/thumbs/02.png"
            />
          </a>
        </div>
        <div className="media all live">
          <a href="images/live/full/03.jpg">
            <img
              title="Live illustrations"
              src="images/live/thumbs/03.png"
            />
          </a>
        </div>
        <div className="media all live">
          <a href="images/live/full/04.jpg">
            <img
              title="Bridal shower welcome card"
              src="images/live/thumbs/04.png"
            />
          </a>
        </div>
        <div className="media all cakes">
          <a href="images/cakes/full/01.jpg">
            <img
              title="Live illustrations"
              src="images/cakes/thumbs/01.png"
            />
          </a>
        </div>
        <div className="media all cakes">
          <a href="images/cakes/full/05.jpg">
            <img
              title="Birthday cake illustration"
              src="images/cakes/thumbs/05.png"
            />
          </a>
        </div>
        <div className="media all cakes">
          <a href="images/cakes/full/02.jpg">
            <img
              title="Birthday cake illustration"
              src="images/cakes/thumbs/02.png"
            />
          </a>
        </div>
        <div className="media all cakes">
          <a href="images/cakes/full/04.jpg">
            <img
              title="Birthday cake illustration"
              src="images/cakes/thumbs/04.png"
            />
          </a>
        </div>
        <div className="media all cards">
          <a href="images/announcement/full/01.jpg">
            <img
              title="Birthday cake illustration"
              src="images/announcement/thumbs/01.png"
            />
          </a>
        </div>
        <div className="media all cards">
          <a href="images/announcement/full/05.jpg">
            <img
              title="Wedding save the date invitation"
              src="images/announcement/thumbs/05.png"
            />
          </a>
        </div>
        <div className="media all cards">
          <a href="images/announcement/full/03.jpg">
            <img
              title="Bridal party announcement card"
              src="images/announcement/thumbs/03.png"
            />
          </a>
        </div>
        <div className="media all cards">
          <a href="images/announcement/full/04.jpg">
            <img
              title="Bridal party announcement card"
              src="images/announcement/thumbs/04.png"
            />
          </a>
        </div>
        <div className="media all digital">
          <a href="images/digital/full/01.jpg">
            <img
              title="Framed digital illustration"
              src="images/digital/thumbs/01.png"
            />
          </a>
        </div>
        <div className="media all digital">
          <a href="images/digital/full/02.jpg">
            <img
              title="Digital portrait"
              src="images/digital/thumbs/02.png"
            />
          </a>
        </div>
        <div className="media all digital">
          <a href="images/digital/full/03.jpg">
            <img
              title="Digital business logo"
              src="images/digital/thumbs/03.png"
            />
          </a>
        </div>
        <div className="media all digital">
          <a href="images/digital/full/04.jpg">
            <img
              title="Digital invitation"
              src="images/digital/thumbs/04.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/01.jpg">
            <img
              title="Framed watercolour portrait"
              src="images/watercolour/thumbs/01.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/02.jpg">
            <img
              title="Watercolour portrait mother and daughter"
              src="images/watercolour/thumbs/02.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/03.jpg">
            <img
              title="Puppy watercolour portrait"
              src="images/watercolour/thumbs/03.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/04.jpg">
            <img
              title="Watercolour portrait of significant other"
              src="images/watercolour/thumbs/04.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/05.jpg">
            <img
              title="Watercolour portrait of bride and groom"
              src="images/watercolour/thumbs/05.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/06.jpg">
            <img
              title="Watercolour portrait of friends"
              src="images/watercolour/thumbs/06.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/07.jpg">
            <img
              title="Watercolour portrait of couple"
              src="images/watercolour/thumbs/07.png"
            />
          </a>
        </div>
        <div className="media all watercolor">
          <a href="images/watercolour/full/08.jpg">
            <img
              title="Watercolour portrait of bride and groom"
              src="images/watercolour/thumbs/08.png"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
