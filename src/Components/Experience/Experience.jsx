import styles from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = function () {
  return (
    <section id="experience" className={styles.experience}>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className={`container ${styles["exp-container"]}`}>
        <div className={styles["exp-frontend"]}>
          <h3>Frontend Development</h3>
          <div className={styles["exp-content"]}>
            <article className={styles["exp-details"]}>
              <BsPatchCheckFill className={styles["exp-icon"]} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles["exp-details"]}>
              <BsPatchCheckFill className={styles["exp-icon"]} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles["exp-details"]}>
              <BsPatchCheckFill className={styles["exp-icon"]} />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles["exp-details"]}>
              <BsPatchCheckFill className={styles["exp-icon"]} />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles["exp-details"]}>
              <BsPatchCheckFill className={styles["exp-icon"]} />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
