import React from "react";
import BG from "@/public/Assets/bgwhitelogo.svg";
import ZimoTeam from "@/public/Assets/zimateamlogo.svg";
import ZimoGroup from "@/public/Assets/zimogroup.svg";
import Down from "@/public/Assets/downarrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Clock from "@/components/Clock";
import CountryFlag from "@/components/CountryFlag";

const AnimatedImage = motion(Image);

const IntroPage = () => {
  const [bgRef, bgInView] = useInView({
    triggerOnce: true,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
  });

  const [groupRef, groupInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute h-full w-full -z-10 flex justify-center items-center">
        <Image
          className="px-8 blur-[10px] w-full md:w-[700px] xl:w-[1000px]"
          alt=""
          width={400}
          height={400}
          src={BG}
        />
      </div>

      <div className="absolute right-0 space-y-6 p-4 ">
        <div className="w-full gap-2 flex items-center">
          <Clock />
          <div className=" hidden md:block">
            <CountryFlag />
          </div>
        </div>
      </div>
      <div className="absolute h-full w-full flex items-center">
        <div className="space-y-6 p-4 md:p-8 w-full flex flex-col max-sm:items-center">
          <AnimatedImage
            ref={bgRef}
            initial={{ x: -100, opacity: 0 }}
            animate={bgInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-[300px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
            alt=""
            width={400}
            height={400}
            src={ZimoTeam}
          />

          <AnimatedImage
            ref={teamRef}
            initial={{ x: -100, opacity: 0 }}
            animate={teamInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-[200px] lg:w-[250px] xl:w-[300px]"
            alt=""
            width={400}
            height={400}
            src={ZimoGroup}
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className=" space-y-12">
          <p className="max-md:text-xs">bring the world closer together</p>
          <div>
            <button className="w-full flex justify-center">
              <Image
                className="animate-bounce hover:animate-pulse max-md:w-10"
                alt=""
                src={Down}
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
