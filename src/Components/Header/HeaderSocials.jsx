import styles from "./Header.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = function () {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
