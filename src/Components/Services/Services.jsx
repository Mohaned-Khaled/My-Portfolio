import styles from "./Services.module.css";
import { BsCheck } from "react-icons/bs";

const Services = function () {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${styles["service-container"]}`}>
        <article className={styles.services}>
          <div className={styles["service-head"]}>
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className={styles["service-list"]}>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>
                Lorem, ipsum dolor sit consectetur adipisicing. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Eum excepturi error
                corrupti.
              </p>
            </li>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>
                Lorem, ipsum dolor sit consectetur adipisicing. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laborum?
              </p>
            </li>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>Lorem, ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>Lorem, ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>Lorem, ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>Lorem, ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck className={styles["service-icon"]} />
              <p>Lorem, ipsum dolor sit consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
