/* eslint-disable max-len */
import { memo } from 'react';

const propTypes = {};

const Section = () => (
  <section className="about" id="about">
    <div className="social column">
      <header>
        <h1>About me</h1>
      </header>
      <img className="image fit show-mobile" src="images/AboutMe.jpg" alt="About Christina Stamos" />
      <p>
        Hello and welcome,
        <br />
        <br />
        I am Christina the designer and artist behind everything Christina Stamos Designs.
        <br />
        <br />
        I am an artist with a passion for design, and background in creative thinking. It is through innately understanding the creative process, that I then developed and created my own personal style through both hand painted watercolor and digital illustrations.
        <br />
        <br />
        Before establishing Christina Stamos Designs,  I completed my studies, a Bachelor of Communications, and worked in Advertising. However, from a very young age I had a passion for art. I was always illustrating and I found it brought me a sense of tranquility and a laser like focus with pristine clarity. With this, naturally my skill set developed, and slowly my family and friends encouraged me to share my work.
        <br />
        <br />
        I am so grateful and privileged to be able to call this work. Everyday I am able to work with so many amazing people and bring their visions, memories and dreams to life. My work can be used across various aspects of your event including stationery, live events, images for cakes and cookies and finally bespoke illustrations to fill your home.
        <br />
        <br />
        I would love to hear from you and understand how we would be able to work together. Please follow the proceeds of the enquire page to get in contact.
        <br />
        <br />
        Thank you and speak soon.
        <br />
        <br />
        Lots of love,
        <br />
        Christina. x
      </p>
      <h3>Follow Me</h3>
      <ul className="icons">
        <li><a href="https://www.facebook.com/Christina-Stamos-Designs-104979891044449" rel="noreferrer" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="https://www.instagram.com/christinastamosdesigns/" rel="noreferrer" target="_blank" style={{ color: '#263133' }} className="icon fa-instagram"><span className="label">Instagram</span></a></li>
      </ul>
    </div>
    <div className="column">
      <img className="image fit show-desktop" src="images/AboutMe.jpg" alt="About Christina Stamos" />
    </div>
  </section>
);

Section.propTypes = propTypes;

export default memo(Section);
