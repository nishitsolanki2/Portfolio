import "./Contact.css";
import React, { useRef } from "react";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8mlclie",
        "template_ougqwch",
        form.current,
        "VMNgkPexhYE5YtHWc"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent !");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="client" className="clientImg" />
          <img src={adobe} alt="client" className="clientImg" />
          <img src={microsoft} alt="client" className="clientImg" />
          <img src={facebook} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Email"
            name="from_email"
          />
          <textarea
            name="message"
            className="msg"
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="Facebook" className="link" />
            <img src={instagram} alt="instagram" className="link" />
            <img src={twitter} alt="twitter" className="link" />
            <img src={youtube} alt="youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
