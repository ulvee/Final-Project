import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Portfolio from "./pages/ExtraPages/Portfolio";
import Footer from "./components/Footer";
import Login from "./pages/UserPage/Login";
import Register from "./pages/UserPage/Register";
import Design from "./pages/CoursePages/Design";
import Business from "./pages/CoursePages/Business";
import Technology from "./pages/CoursePages/Technology";
import WebDevelopment from "./pages/CoursePages/WebDevelopment";
import Marketing from "./pages/CoursePages/Marketing";
import Photography from "./pages/CoursePages/Photography";
import Gallery from "./pages/ExtraPages/Gallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/category/design" element={<Design />} />
        <Route path="/courses/category/business" element={<Business />} />
        <Route path="/courses/category/technology" element={<Technology />} />
        <Route
          path="/courses/category/webdevelopment"
          element={<WebDevelopment />}
        />
        <Route path="/courses/category/marketing" element={<Marketing />} />
        <Route path="/courses/category/photography" element={<Photography />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
