import { memo } from 'react';
import Nav from '../shared/Nav';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Contact from '../shared/Contact';
import Section from './components/Section';

const Enquire = () => (
  <div className="page-wrap">
    <Nav />
    <section id="main">
      <Header />
      <Section />
      <Contact />
      <Footer />
    </section>
  </div>
);

export default memo(Enquire);
