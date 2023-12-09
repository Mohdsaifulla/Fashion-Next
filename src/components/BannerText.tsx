
import React from "react";
import { motion } from "framer-motion"
interface props {
  title: string;
}
const BannerText = ({ title }: props) => {
  return (
    <div className=" hidden lg:inline-block h-full w-full absolute top-1/4 left-2">
      <div className="flex justify-center flex-col gap-y-6">
        <motion.h1 initial={{x:30,opacity:0}} 
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5}}
        className="text-7xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl font-serif">{title}</motion.h1>
        <motion.p 
        initial={{x:40,opacity:0}} 
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.6}}
        className="text-lg font-bold px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</motion.p>
        <motion.div
        initial={{x:50,opacity:0}} 
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.7}}
        className="flex gap-2 px-2">
          <button className="p-2 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm font-semibold">GET MORE</button>
          <button className="p-2 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm font-semibold">GRAB NOW</button>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerText;
