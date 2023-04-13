import React from "react";
import Contact from "../../components/Home/Contact";
import Courses from "../../components/Home/Courses";
import First from "../../components/Home/First";
import "./home.scss";
import Footer from "../../components/Home/Footer";
export default function HomePage() {
  return (
    <div className="home-page">
      <section>
        <First></First>
        <Courses></Courses>
        <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  );
}
