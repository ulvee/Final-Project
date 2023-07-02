import React from "react";
import Create from "../components/Home/Section/Create";
import SectionTwo from "../components/Home/Section/SectionTwo";
import BuiderKit from "../components/Home/Section/BuiderKit";
import TopCategories from "../components/Home/Section/TopCategories";
import Trusted from "../components/Home/Section/Trusted";
import TopCourse from "../components/Home/Section/TopCourse";
import CreateAccount from "../components/Home/Section/CreateAccount";
import Logos from "../components/Home/Section/Logos";
import ClientFeedback from "../components/Home/Section/ClientFeedback";
import LastestNew from "../components/Home/Section/LastestNew";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Create />
      <SectionTwo />
      <BuiderKit />
      <TopCategories />
      <Trusted />
      <TopCourse />
      <CreateAccount />
      <Logos />
      <ClientFeedback />
      <LastestNew />
    </>
  );
}

export default Home;
