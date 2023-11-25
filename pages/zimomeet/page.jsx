"use client";
import React from "react";
import Image from "next/image";
import ZimaMeet from "@/public/Assets/ZimoMeet.svg";
import ZimoLive from "@/public/Assets/CameraLivelogo.svg";
import Lock from "@/public/Assets/Lock.svg";
import Down from "@/public/Assets/downarrow.svg";
import { FaBeer, FaLock } from "react-icons/fa";
const Sectionseven = () => {
  return (
    <div
      id="target"
      className="h-screen transition-all duration-500 relative px-4 md:px-8  bg-white "
    >
      <div className="relative z-0">
        <div className="absolute w-full">
          <div className="h-screen w-full z-0 opacity-25 blur-md">
            <div className="flex w-full items-center justify-center h-full">
              <Image
                className="p-4 md:p-8  flex w-full max-w-6xl justify-center "
                src={ZimoLive}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="area h-full">
        <div className="h-full relative ">
          <h1 className="absolute py-4 md:py-8 top-0 left-0 max-lg:text-sm">
            <Image
              src={ZimaMeet}
              alt=""
              className="w-[180px] md:w-[250px] lg:w-[318px]"
            />
          </h1>

          <div className=" absolute top-[15vh] md:top-[30vh] ">
            <div className=" space-y-1 lg:space-y-2 text-xs xl:text-sm">
              <p>PREMIUM VIDEO MEETINGS</p>
              <p>END-TO-END ENCRYPTION</p>
              <p>LOBBY MODE</p>
              <p>PASSWORD PROTECTED MEETINGS</p>
              <p>CUSTOMISED LINKS</p>
              <p>RECORDINGS</p>
              <p>FREE FOR EVERYONE</p>
            </div>
          </div>
          <div className=" absolute  top-[70vh] md:top-[60vh] md:space-y-2">
            <h3 className="text-md md:text-xl lg:text-2xl xl:text-2xl">
              discover
            </h3>
            <h1 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              one platform
            </h1>
            <p className=" text-[#737373] text-xs">
              together, we create and built a better world.
            </p>
          </div>


            <div className="flex relative h-full md:justify-center items-center">
              <Image
                className=" w-[180px] md:w-[250px] lg:w-[318px] flex"
                src={ZimoLive}
                alt=""
              />
            </div>

            <div className="absolute flex items-center pb-14 md:pb-8 gap-2  bottom-0 text-[#737373] text-xs md:text-sm">
            <FaLock /> end-to-end encryption
          </div>

          <div className="absolute z-10  right-0 bottom-0 pb-14 md:pb-8">
            <Image
              className=" h-[60px] md:h-[100px] xl:h-[140px]"
              src={Lock}
              alt=""
            />
          </div>

          <div className="w-full flex justify-center absolute bottom-0">
            <button className="">
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

export default Sectionseven;
