import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_g3sidvq',
        'template_ujzxdsl',
        formData,
        'llliDrYiHDPng9b7_',
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);  // Poruka poslana uspješno
          setError('');  // Očisti grešku ako je bila
          setFormData({ email: '', title: '', message: '' });
        },
        (error) => {
          console.error(error.text);
          setError('Failed to send message. Please try again later.');
          setIsSent(false);  // Ako ne uspije, ne prikazuj success
        }
      );
  };

  return (
    <div className='contact' id='contact'>
      <p className='title-0'>You like my portfolio?</p>
      <h1>Contact me</h1>
      <div className="contact__container">
        <div className="contact__container--socials">
          <a href="https://github.com/mandrisic" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mirna-andrisic/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:mirnandrisic@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="https://www.instagram.com/mirnaandrisic/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div className="contact__container--form">
          <p className='title-0 seperator'>or send me a message</p>
          <form className="contact-form contact__form" onSubmit={handleSubmit}>
            <div className="row gx-0">
              <div className="col py-2 px-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  aria-label="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col py-2 px-2">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="Title"
                  aria-label="Title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='row gx-0 py-3 px-2'>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Write me a message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='row gx-0 py-3 px-2'>
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
          {isSent && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;