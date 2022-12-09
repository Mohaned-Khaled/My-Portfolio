import CTA from "./Cta";
import styles from "./Header.module.css";
import ME from "../../assets/mohaned.PNG";
import HeaderSocials from "./HeaderSocials";

const Header = function () {
  const headerStyle = `container ${styles.header}`;
  return (
    <header>
      <div className={headerStyle}>
        <h5>Hello I'm</h5>
        <h1>Mohaned Khaled Farouk</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className={styles.scroll}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
