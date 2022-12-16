import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function lonelyinteger(a) {
  if (a.length === 1) return a[0];
  let unique;
  a.forEach((num) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (num === a[i]) count += 1;
    }
    console.log(count);
    console.log(num);
    if (count === 1) unique = num;
  });

  return unique;
}

console.log(lonelyinteger([1, 1, 2]));

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
