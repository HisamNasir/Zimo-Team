import React from "react";
import Image from "next/image";
import Down from "@/public/Assets/downarrow.svg";
import Zimateamlogo from "@/public/Assets/zimateamlogo.svg";
const JoinOurTeam = () => {
  return (
    <div className="h-screen relative bg-black">
      <div className="flex area px-8 top-16 w-full absolute justify-center items-center ">
        <Image
          className="invert w-[180px] md:w-[250px] lg:w-[318px]"
          src={Zimateamlogo}
          alt=""
        />
      </div>
      <div className="flex h-[25vh] md:h-[50vh] absolute  text-white w-full items-center justify-center ">
        <h1 className=" text-base md:text-xl xl:text-2xl">equal opportunity</h1>
      </div>
      <div className="flex h-full absolute w-full items-center justify-center ">
        <p className=" text-center leading-6 md:leading-8 text-xs md:text-sm  px-8 container text-[#939393]">
          ZIMO is proud to be an equal opportunity workplace and is an
          affirmative action employer. We are committed to equal employment
          opportunity regardless of race, colour, ancestry, religion, sex,
          national origin, sexual orientation, age, citizenship, marital status,
          disability, gender identity or Veteran status. We also consider
          qualified applicants regardless of criminal histories, consistent with
          legal requirements.
        </p>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="space-y-12">
          <p className="max-md:text-xs text-center text-white">join our team</p>
          <div>
            <button className="w-full flex justify-center">
              <Image
                className="animate-bounce invert hover:animate-pulse max-md:w-10"
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

export default JoinOurTeam;
