import styles from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = function () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rnxg45r",
        "template_arwm76l",
        form.current,
        "IE45INVnT8wS-ltUc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${styles["contact-container"]}`}>
        <div className={styles["contact-options"]}>
          <article className={styles["contact-option"]}>
            <MdOutlineEmail className={styles.icon} />
            <h4>Email</h4>
            <h5>mohanedkhf98@gmail.com</h5>
            <a
              href="mailto:mohanedkhf98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send A message
            </a>
          </article>
          <article className={styles["contact-option"]}>
            <RiMessengerLine className={styles.icon} />
            <h4>Messanger</h4>
            <h5>Mohaned Khaled</h5>
            <a
              href="https://m.me/profile.php?id=100012953357329"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send A message
            </a>
          </article>
          <article className={styles["contact-option"]}>
            <BsWhatsapp className={styles.icon} />
            <h4>WhatsApp</h4>
            <h5>01128500558</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01128500558"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send A message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
