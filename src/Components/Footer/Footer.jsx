import styles from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = function () {
  return (
    <footer>
      <a href="/#" className={styles.logo}>
        Mohaned
      </a>

      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#service">Services</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.socials}>
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
        <a href="https://instgram.com">
          <BsInstagram />
        </a>
      </div>

      <div className={styles.copyright}>
        <small>&copy; Mohaned portfolio: All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
