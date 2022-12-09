import styles from "./About.module.css";
import ME from "../../assets/mohaned2edit.jpg";
import { FaAward } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsFolderFill } from "react-icons/bs";

const About = function () {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${styles["about-container"]}`}>
        <div className={styles["about-me"]}>
          <div className={styles["about-me-img"]}>
            <img src={ME} alt="my pic" />
          </div>
        </div>

        <div className={styles["about-content"]}>
          <div className={styles["about-cards"]}>
            <article className={styles["about-card"]}>
              <FaAward className={styles["about-icon"]} />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>

            {/* <article className={styles["about-card"]}>
              <BiUser className={styles["about-icon"]} />
              <h5>Clients</h5>
              <small>Nothing</small>
            </article> */}

            <article className={styles["about-card"]}>
              <BsFolderFill className={styles["about-icon"]} />
              <h5>Projects</h5>
              <small>+10</small>
            </article>
          </div>

          <p>
            I am Mohaned Khaled Farouk, A civil engineering graduate working as
            a front-end developer with experience in designing and building
            responsive web pages for more than 10 projects
            <br />
            I'm seeking a job in a reputable company where i can contribute in
            its growth while improving my skills
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
