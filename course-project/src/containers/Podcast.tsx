import React from "react";
import Dotsvg from "../svg/Dotsvg";
import MicroPhone from "../svg/MicroPhone";

const Podcast = () => {
  return (
    <div className="absolute top-[91px] left-[-70px] w-[1439px] h-[652px] overflow-hidden text-base text-default-white font-heading-heading-3">
      <div className="absolute top-[94px] left-[175px] w-[580px] h-[371px]">
        <div className="absolute top-[0px] left-[0px] w-[580px] h-[214.45px]">
          <div className="absolute top-[151.7px] left-[0px] inline-block w-[433px] h-[62.75px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </div>
          <b className="absolute top-[0px] left-[0px] text-29xl inline-block w-[580px] h-[127.7px]">
            Learn how to launch a successful podcast
          </b>
        </div>
        <div className="absolute top-[296.14px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[74.86px] text-xl font-text-20-bold">
          <b className="absolute top-[19px] left-[55px]">Sign up Now</b>
        </div>
      </div>
      <Dotsvg />
      <img
        className="absolute top-[94px] left-[773px] rounded-3xs w-[491px] h-[281px] object-cover"
        alt=""
        src="/everyoneissmilinglistensgrouppeoplebusinessconferencemodernclassroomdaytime-1@2x.png"
      />
      <img
        className="absolute top-[184px] left-[720px] rounded-3xs w-[491px] h-[281px] object-cover"
        alt=""
        src="/groupbusinessworkerssmilinghappyconfidentworkingtogetherwithsmilefaceapplaudingonethemoffice-1@2x.png"
      />
      <div className="w-[63px] h-[62px] absolute top-[431px] left-[1253.19px] rounded-5xs bg-default-white shadow-[0px_10px_40px_rgba(154,_148,_148,_0.25)] overflow-hidden flex flex-col py-[7px] px-[2px] box-border items-center justify-center [transform:_rotate(15.14deg)] [transform-origin:0_0] ">
        <MicroPhone />
      </div>
      <div className="absolute top-[264.82px] left-[1295px] rounded-8xs bg-default-white shadow-[0px_10px_40px_rgba(154,_148,_148,_0.25)] w-[65px] h-[65px] overflow-hidden flex flex-col py-[7px] px-[3px] box-border items-center justify-center [transform:_rotate(-16.83deg)] [transform-origin:0_0]">
        <img
          className="relative w-[44.79px] h-[34.39px]"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

export default Podcast;
