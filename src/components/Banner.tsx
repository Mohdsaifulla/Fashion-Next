"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import bannerone from "@/images/banner-1.jpg"
import bannertwo from "@/images/banner-2.jpg"
import bannerthree from "@/images/banner-3.jpg"
import BannerText from "./BannerText";
const Banner = () => {


  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };


  

  return (
    <div className="relative px-8">
    <Slider {...settings}>
    <div className="relative">
      <Image src={bannerone} alt="banner-1"  className="w-full h-full relative"  />
      <BannerText title='Outfit For Everyone'/>
      </div>
      <div className="relative">
      <Image src={bannertwo} alt="banner-1" className="w-full h-full relative overflow-hidden object-contain" />
      <BannerText title='Outfit For Everyone'/>
      </div>
      <div className="relative">
      <Image src={bannerthree} alt="banner-1" className="w-full h-full relative" />
      <BannerText title='Outfit For Everyone'/>
      </div>

    </Slider>
    </div>
  );
};

export default Banner;
