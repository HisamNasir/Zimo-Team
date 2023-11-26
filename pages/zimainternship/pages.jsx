import React, { useEffect, useState } from "react";
import Image from "next/image";
import Down from "@/public/Assets/downarrow.svg";
import Sign from "@/public/Assets/zidoc-sign.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ZimaInternImg from "@/public/Assets/zimainternship.svg";
import BG from "@/public/Assets/bgwhitelogo.svg";

const ZimaInternship = () => {
  const textControls = useAnimation();
  const bgControls = useAnimation();

  const [textTop, setTextTop] = useState("Word1");
  const [textBot, setTextBot] = useState("for everyone");
  const [colorTop, setColorTop] = useState("black");
  const [colorBot, setColorBot] = useState("black");


  const [colorBotFor, setColorBotFor] = useState("#be9f56");
  const [colorBotEveryone, setColorBotEveryone] = useState("black");

  const [textRef, textInView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  const [bgRef, bgInView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    const topWords = ["build", "create", "design", "code"];
    let topIndex = 0;
    const topColors = ["#be9f56", "black", "#be9f56","black" ];

    const botColorsFor = ["#be9f56", "black", "black", "gray"];
    let botIndexFor = 0;

    const botColorsEveryone = ["black", "#be9f56", "gray", "black"];
    let botIndexEveryone = 0;

    const topInterval = setInterval(() => {
      topIndex = (topIndex + 1) % topWords.length;
      setColorTop(topColors[topIndex]);
      setTextTop(topWords[topIndex]);
    }, 1000);

    const botInterval = setInterval(() => {
      botIndexFor = (botIndexFor + 1) % botColorsFor.length;
      setColorBotFor(botColorsFor[botIndexFor]);

      botIndexEveryone = (botIndexEveryone + 1) % botColorsEveryone.length;
      setColorBotEveryone(botColorsEveryone[botIndexEveryone]);
    }, 1000);

    return () => {
      clearInterval(topInterval);
      clearInterval(botInterval);
    };
  }, []);

  useEffect(() => {
    if (bgInView) {
      bgControls.start({ opacity: 1, transition: { duration: 2 } });
    } else {
      bgControls.start({ opacity: 0, transition: { duration: 1 } });
    }
  }, [bgControls, bgInView]);

  return (
    <div className="h-screen relative ">
    <div className="absolute space-y-8 px-4 pt-14 flex flex-col items-center w-full text-center text-white">
      <div id="topChange" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest" style={{ color: colorTop }}>
        {textTop}
      </div>
    </div>
    <div className="absolute h-full w-full -z-10 flex justify-center items-center">
      <Image
        className="px-8 blur-[10px] w-full md:w-[700px] xl:w-[1000px]"
        alt=""
        width={400}
        height={400}
        src={BG}
      />
    </div>
    <div id="botChange" className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest absolute bottom-24 w-full flex justify-center">
      <span style={{ color: colorBotFor }}>for </span> 
      <span style={{ color: colorBotEveryone }}>everyone</span>
    </div>
    <motion.div
      ref={bgRef}
      initial={{ opacity: 0 }}
      animate={bgControls}
      className="absolute h-full w-full flex justify-center items-center"
    >
      <Image
        className="p-8 w-[200px] md:w-[300px]"
        alt=""
        width={400}
        height={400}
        src={ZimaInternImg}
      />
    </motion.div>

    <div className="absolute bottom-0 w-full flex justify-center">
      <div>
        <button className="w-full flex justify-center">
          <Image
            className="animate-bounce hover:animate-puls  max-md:w-10"
            alt=""
            src={Down}
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  </div>
);
};


export default ZimaInternship;
