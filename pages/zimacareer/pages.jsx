import React, { useEffect } from "react";
import Image from "next/image";
import Down from "@/public/Assets/downarrow.svg";
import Sign from "@/public/Assets/zidoc-sign.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ZimaCareerImg from "@/public/Assets/Zimacareers.svg";
import WorldMap from "@/public/Assets/Worldmap.png";
const ZimaCareer = () => {
  const textControls = useAnimation();
  const bgControls = useAnimation();

  const [textRef, textInView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  const [bgRef, bgInView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

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
        <p className="max-md:text-xs md:text-sm">
        WORK ON OUR INNOVATIVE SOFTWARE PRODUCTS.
        </p>
        <p className="max-md:text-xs md:text-sm">
        DESIGN AND BUILD THE SYSTEMS THAT ARE CHANGING THE WORLD.
        </p>
      </div>
      <div
        className="absolute h-full w-full -z-10 flex justify-center items-center"
      >
        <Image
          className="w-full h-screen object-cover brightness-90 bg-black"
          alt=""
          width={1500}
          height={1500}
          src={WorldMap}
        />
      </div>
      <motion.div
        ref={bgRef}
        initial={{ opacity: 0 }}
        animate={bgControls}
        className="absolute h-full w-full flex justify-center items-center"
      >
        <Image
          className="p-8 w-[250px] md:w-[350px]"
          alt=""
          width={400}
          height={400}
          src={ZimaCareerImg}
        />
      </motion.div>

      <div className="absolute bottom-0 px-4 pb-16 space-y-4 md:space-y-8 text-white">

          <h1 className=" text-base md:text-lg">global vision</h1>
          <div className="space-y-2 md:space-y-4 max-md:text-xs md:text-sm">
        <p>
          with a remote culture. diversity is naturally in our dna.
        </p>
        <p>
          dbased across the globe. making up over 23 different nationalities.
        </p>
          </div>

      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <div>
          <button className="w-full flex justify-center">
            <Image
              className="animate-bounce hover:animate-puls invert max-md:w-10"
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

export default ZimaCareer;
