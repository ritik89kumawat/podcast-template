import React from "react";
import Youtubesvg from "../svg/Youtubesvg";
import Intagram from "../svg/Intagram";

const Footer = () => {
  return (
    <div className="absolute top-[2514px] left-[0px] w-[1440px] h-[493px] overflow-hidden text-xs text-default-white">
      <img
        className="absolute top-[6.5px] left-[0px] w-[1440px] h-[486.44px]"
        alt=""
        src="/polygon-2.svg"
      />
      <div className="absolute top-[419px] left-[222px] box-border w-[995px] h-[74px] overflow-hidden flex flex-row py-5 px-0 items-center justify-center gap-[192px] border-t-[0.5px] border-solid border-default-white">
        <div className="relative">All Right Reserved @Copyright 2023</div>
        <div className="flex flex-row items-center justify-start gap-[64px]">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="relative">Terms of Service</div>
            <div className="relative">Privacy Policy</div>
            <div className="relative">Product</div>
          </div>
          <div className="w-36 flex flex-row items-center justify-start gap-[16px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/mdifacebook.svg"
            />
            <Youtubesvg />
            <Intagram />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/uiltwitter.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[68px] left-[422px] flex flex-col items-center justify-start gap-[64px] text-13xl text-black font-heading-heading-3">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <b className="relative">We have what you’re looking for</b>
          <div className="relative text-xs font-text-20-bold text-center inline-block w-[596px] bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-transparent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </div>
        </div>
        <div className="relative rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[60px] text-xl text-default-white font-text-20-bold">
          <b className="absolute top-[15px] left-[36px]">Get Started Now</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
