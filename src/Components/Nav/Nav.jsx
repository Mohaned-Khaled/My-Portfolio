import styles from "./Nav.module.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BiUser, BiBook, BiMessageAltDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Nav = function () {
  const [activeNav, setActiveNav] = useState("/#");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const navClickHandler = function (type) {
    setActiveNav(type);
  };

  return (
    <nav className={!loading ? `${styles.navigation}` : ""}>
      <a
        href="/#"
        className={activeNav === "/#" ? styles.active : ""}
        onClick={navClickHandler.bind(this, "/#")}
      >
        <AiTwotoneHome />
      </a>

      <a
        href="#about"
        onClick={navClickHandler.bind(this, "#about")}
        className={activeNav === "#about" ? styles.active : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={navClickHandler.bind(this, "#experience")}
        className={activeNav === "#experience" ? styles.active : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={navClickHandler.bind(this, "#portfolio")}
        className={activeNav === "#portfolio" ? styles.active : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={navClickHandler.bind(this, "#contact")}
        className={activeNav === "#contact" ? styles.active : ""}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
