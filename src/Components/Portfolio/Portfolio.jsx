import styles from "./Portfolio.module.css";
import IMG1 from "../../assets/Trainee.png";
import IMG2 from "../../assets/AppRestaurant.png";
import IMG3 from "../../assets/FashionStore.png";
import IMG4 from "../../assets/DemoPortfolio.png";
import IMG5 from "../../assets/nikeApp.png";
import IMG6 from "../../assets/CryptoApp.png";
import IMG7 from "../../assets/WeatherApp.png";

const DATA = [
  {
    id: 1,
    image: IMG5,
    github: "https://github.com/Mohaned-Khaled/Nike-Store",
    demo: "https://nike-store-app.netlify.app/",
    title: "Nike Store",
  },
  {
    id: 5,
    image: IMG3,
    github: "https://github.com/Mohaned-Khaled/Fashion-Store",
    demo: "https://mohanad-fashion-store.netlify.app/",
    title: "Fashion Store",
  },
  {
    id: 2,
    image: IMG1,
    github: "https://github.com/Mohaned-Khaled/React_And_ReactRouter6_Project",
    demo: "https://fitness-world-app.netlify.app/",
    title: "Trainee App",
  },
  {
    id: 3,
    image: IMG2,
    github: "https://github.com/Mohaned-Khaled/Food-Delivery-App",
    demo: "https://food-delivery-city.netlify.app/",
    title: "Food Delivery App",
  },
  {
    id: 4,
    image: IMG4,
    github: "https://github.com/Mohaned-Khaled/HTML_CSS_JS_Portfolio",
    demo: "https://demo-portfolio-app.netlify.app/",
    title: "Demo Portfolio",
  },

  {
    id: 6,
    image: IMG6,
    github: "https://github.com/Mohaned-Khaled/Crypto-App",
    demo: "https://crypto-currencies-app.netlify.app/",
    title: "Crypto App",
  },
  {
    id: 7,
    image: IMG7,
    github: "https://github.com/Mohaned-Khaled/Weather-App",
    demo: "https://world-weather-application.netlify.app/",
    title: "Bankist App",
  },
];

const Portfolio = function () {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles["portfolio-container"]}`}>
        {DATA.map((data) => (
          <article key={data.id} className={styles["portfolio-item"]}>
            <div className={styles["portfolio-image"]}>
              <img src={data.image} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <div className={styles["portfolio-cta"]}>
              <a
                href={data.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={data.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
