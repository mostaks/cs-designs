import Nav from '../shared/Nav';
import Header from '../shared/Header';
import Contact from '../shared/Contact';
import Footer from '../shared/Footer';
import Gallery from './components/Gallery';

const GalleryPage = () => (
  <div className="page-wrap">
    <Nav />
    <section id="main">
      <Header />
      <Gallery />
      <Contact />
      <Footer />
    </section>
  </div>
);

export default GalleryPage;
