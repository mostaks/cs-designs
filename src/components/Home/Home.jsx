import { memo, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';
import Contact from '../shared/Contact';
import Banner from './components/Banner';
import Gallery from './components/Gallery';

const Home = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      const { data } = await axios.get(`
        ${process.env.INSTA_API_URL}/me/media?
        fields=id,media_type,media_url,username,timestamp&
        access_token=${process.env.INSTA_ACCESS_TOKEN}
      `);

      const mediaData = data?.data ?? [];

      setMedia(mediaData);
    };

    fetchMedia();
  }, []);

  return (
    <div className="page-wrap">
      <Nav />
      <section id="main">
        <Banner />
        <Gallery media={media} />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default memo(Home);
