/* eslint-disable max-len */
import { useState } from 'react';
import * as emailjs from 'emailjs-com';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const arr = [...e.target].map(({ value }) => value);

    const message = `
      Name: ${arr[0]} \n
      Email: ${arr[1]} \n
      Product: ${arr[2]} \n
      Date: ${arr[3]} \n
      Message: ${arr[4]}
    `;

    const templateParams = {
      from_name: arr[1],
      to_name: 'Nin',
      subject: `${arr[0]}-${arr[2]}-${arr[3]}`,
      message,
    };

    const { text } = await emailjs.send(
      process.env.EMAIL_ID,
      'template_6ughj89',
      templateParams,
      process.env.EMAIL_JS_USER_ID,
    );

    setSubmitted(text === 'OK');
  };

  return (
    <section id="contact">
      <div className="social column">
        <h3>Contact Me</h3>
        <p>Enquire about a custom illustration by filling out the form! Each piece created by Christina is one-of-a-kind and requires a custom quote based on specific requirements. We’ll be in touch with you within 24-48 hours! Yes we create custom commissioned pieces! All works can be ordered in a variety of sizes, and created in a style to suit you. For all custom design inquiries, please contact today!</p>
        <h3>Follow Me</h3>
        <ul className="icons">
          <li><a href="https://www.facebook.com/Christina-Stamos-Designs-104979891044449" rel="noreferrer" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/christinastamosdesigns/" rel="noreferrer" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
      </div>

      <div className="column">
        <h3>Get in Touch</h3>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="field half first">
            <label type="text" htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Name" />
          </div>
          <div className="field half">
            <label type="text" htmlFor="email">Email</label>
            <input name="email" id="email" type="email" placeholder="Email" />
          </div>
          <div className="field half first">
            <label type="text" htmlFor="product">What illustration type are you after?</label>
            <select id="product-options" className="minimal">
              <option disabled selected value="select on option">-- select an option --</option>
              <option value="live">Live event</option>
              <option value="watercolour">Watercolour</option>
              <option value="digital">Digital</option>
              <option value="cakes">Cake decoration</option>
              <option value="stationary">Event stationary</option>
              <option value="cards">Announcement cards</option>
            </select>
          </div>
          <div className="field half">
            <label type="text" htmlFor="date">When do you want it by?</label>
            <input name="date" id="date" placeholder="Date" type="date" />
          </div>
          <div className="field">
            <label type="text" htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Message" />
          </div>
          <ul className="actions">
            <li>
              <input value="Send Message" className="button" type="submit" />
              {submitted && (
                <>
                  <span id="check-span" className="icon fa-check-circle" />
                  <span>Order submitted. Thank you!</span>
                </>
              )}
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
