import { FunctionComponent } from "react";
import Footer from "../compontents/Footer";
import Header from "../compontents/Header";
import Podcast from "../containers/Podcast";
import Features from "../containers/Features";
import Plan from "../containers/Plan";
import Review from "../containers/Review/Review";

const Dashboard: FunctionComponent = () => {
  return (
    <>
      <div className="relative  w-full h-[3007px] overflow-hidden text-left text-xl text-black font-text-20-bold">
        <img
          className="absolute top-[-751px] left-[-860px] w-[2574.41px] h-[2064.82px]"
          alt=""
          src="/group-1.svg"
        />
        <img
          className="absolute top-[547px] left-[974px] w-[597px] h-[441px] object-cover"
          alt=""
          src="/pngwing-1@2x.png"
        />
        <Header />
        <Features />
        <Podcast />
        <Plan />
        <Review />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
