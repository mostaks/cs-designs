import { memo } from 'react';
import Nav from '../shared/Nav';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Section from './components/Section';

const About = () => (
  <div className="page-wrap">
    <Nav />
    <section id="main">
      <Header />
      <Section />
      <Footer />
    </section>
  </div>
);

export default memo(About);
