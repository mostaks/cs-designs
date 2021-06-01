/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
const Gallery = ({ media }) => (
  <section id="galleries">
    <div className="gallery">
      <header className="special">
        <h2>What&apos;s New</h2>
        <span className="icon lg fa-instagram" />
      </header>
      <div className="content">
        {media.length > 0 ? media.slice(0, 8).map((thing) => {
          console.log('thing:', thing);
          const { media_url, time_stamp, media_type } = thing;
          // if (media_type === 'VIDEO') return null;
          return (
          <div className="insta-media" key={media_url}>
            <a href="https://www.instagram.com/christinastamosdesigns/" target="_blank" rel="noreferrer">
              {media_type === 'VIDEO' ? (
                <video className="min-img" src={media_url} alt={time_stamp} />
              ) : <img className="min-img" src={media_url} alt={time_stamp} />}
            </a>
          </div>
        )}) : (
          <>
            <div className="media">
              <a href="images/digital/full/08.jpg"><img src="images/digital/thumbs/08.png" /></a>
            </div>
            <div className="media">
              <a href="images/digital/full/01.jpg"><img src="images/digital/thumbs/01.png" /></a>
            </div>
            <div className="media">
              <a href="images/cakes/full/04.jpg"><img src="images/cakes/thumbs/04.png" /></a>
            </div>
            <div className="media">
              <a href="images/cakes/full/07.jpg"><img src="images/cakes/thumbs/07.png" /></a>
            </div>
            <div className="media">
              <a href="images/live/full/06.jpg"><img src="images/live/thumbs/06.png" /></a>
            </div>
            <div className="media">
              <a href="images/announcement/full/05.jpg"><img src="images/announcement/thumbs/05.png" /></a>
            </div>
            <div className="media">
              <a href="images/live/full/02.jpg"><img src="images/live/thumbs/02.png" /></a>
            </div>
            <div className="media">
              <a href="images/event/full/02.jpg"><img src="images/event/thumbs/02.png" /></a>
            </div>
          </>
        )}
      </div>
      <footer>
        <a href="/gallery" className="button big">Full Gallery</a>
      </footer>
    </div>
  </section>
);

export default Gallery;
