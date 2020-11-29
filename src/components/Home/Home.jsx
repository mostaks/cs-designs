import { memo } from 'react';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';
import Contact from '../shared/Contact';
import Banner from './components/Banner';
import Gallery from './components/Gallery';

const Home = () => (
  <div className="page-wrap">
    <Nav />
    <section id="main">
      <Banner />
      <Gallery />
      <Contact />
      <Footer />
    </section>
  </div>
);

export default memo(Home);
