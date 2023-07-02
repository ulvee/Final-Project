import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import DetailPage from "./pages/PortfolioPages/DetailPage";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Account from "./pages/UserPage/Account";
import Admin from "./Admin/pages/Admin";
import CoursesDashboard from "./Admin/components/CoursesDashboard";
import GalleryDashboard from "./Admin/components/GalleryDashboard";
import PortfolioDashboard from "./Admin/components/PortfolioDashboard";
import CoursePost from "./Admin/components/Post/CoursePost";
import GalleryPost from "./Admin/components/Post/GalleryPost";
import ProjectPost from "./Admin/components/Post/ProjectPost";
import Collections from "./pages/CoursePages/Collections";
import NotFound from "./pages/NotFound";
import Music from "./pages/CoursePages/Music";
import Language from "./pages/CoursePages/Language";
import Introductory from "./pages/CoursePages/Introductory";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <UserContextProvider>
        {!isAdminPage && <Header />}
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/category/design" element={<Design />} />
          <Route path="/courses/category/business" element={<Business />} />
          <Route path="/courses/category/technology" element={<Technology />} />
          <Route path="/courses/collections" element={<Collections />} />
          <Route
            path="/courses/category/webdevelopment"
            element={<WebDevelopment />}
          />
          <Route path="/courses/category/marketing" element={<Marketing />} />
          <Route
            path="/courses/category/photography"
            element={<Photography />}
          />
          <Route path="/courses/category/music" element={<Music />} />
          <Route path="/courses/category/language" element={<Language />} />
          <Route
            path="/courses/category/introductory"
            element={<Introductory />}
          />
          <Route path="/projects/:id" element={<DetailPage />}></Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/courses" element={<CoursesDashboard />} />
          <Route path="/admin/gallery" element={<GalleryDashboard />} />
          <Route path="/admin/project" element={<PortfolioDashboard />} />
          <Route path="/admin/post/courses" element={<CoursePost />} />
          <Route path="/admin/post/gallery" element={<GalleryPost />} />
          <Route path="/admin/post/projects" element={<ProjectPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isAdminPage && <Footer />}
      </UserContextProvider>
    </>
  );
}

export default App;
