import styles from "./Header.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = function () {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.linkedin.com/in/mohaned-khaled-765522242/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Mohaned-Khaled"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100012953357329"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
