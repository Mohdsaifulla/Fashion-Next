"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import bannerone from "@/images/banner-1.jpg"
import bannertwo from "@/images/banner-2.jpg"
import bannerthree from "@/images/banner-3.jpg"
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };


  

  return (
    <div className="relative px-6">
    <Slider {...settings}>
    <div className="">
      <Image src={bannerone} alt="banner-1"  className="w-full h-full relative"  />
      </div>
      <div className="">
      <Image src={bannertwo} alt="banner-1" className="w-full h-full relative overflow-hidden object-contain" />
      </div>
      <div className="">
      <Image src={bannerthree} alt="banner-1" className="w-full h-full relative" />
      </div>

    </Slider>
    </div>
  );
};

export default Banner;
