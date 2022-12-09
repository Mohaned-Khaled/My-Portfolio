import styles from "./Testimonials.module.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const DUMMY_DATA = [
  {
    avatar: Avtr1,
    id: 1,
    name: "Mohaned Khaled",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quidem autem at rerum fuga sapiente esse, dolore repudiandae facere quos atque maiores! Repellendus iure est provident autem odio, voluptatem rem?",
  },
  {
    avatar: Avtr2,
    id: 2,
    name: "Mostafa Khaled",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quidem autem at rerum fuga sapiente esse, dolore repudiandae facere quos atque maiores! Repellendus iure est provident autem odio, voluptatem rem?",
  },
  {
    avatar: Avtr3,
    id: 3,
    name: "Rana Essam",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quidem autem at rerum fuga sapiente esse, dolore repudiandae facere quos atque maiores! Repellendus iure est provident autem odio, voluptatem rem?",
  },
  {
    avatar: Avtr4,
    id: 4,
    name: "Dina Ibrahim",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quidem autem at rerum fuga sapiente esse, dolore repudiandae facere quos atque maiores! Repellendus iure est provident autem odio, voluptatem rem?",
  },
];

const Testimonials = function () {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimobials</h2>

      <Swiper
        className={`container ${styles["testi-container"]}`}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={40}
      >
        {DUMMY_DATA.map((data) => (
          <SwiperSlide key={data.id} className={styles.testimonials}>
            <div className={styles["client-avatar"]}>
              <img src={data.avatar} alt="" />
            </div>

            <h5 className={styles["client-name"]}>{data.name}</h5>
            <small className={styles["client-review"]}>{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
