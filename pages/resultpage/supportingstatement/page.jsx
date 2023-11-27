// ResultPagefour.js
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Intern from "@/public/Assets/zimainternshipsmall.svg";
import ZimaTeam from "@/public/Assets/zimateamlogo.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ResultPagefour = () => {
  const router = useRouter();
  const [paragraph, setParagraph] = useState("");

  const handleBackToCountry = () => {
    router.back();
  };

  const handleStart = (e) => {
    e.preventDefault();

    // Check if the paragraph is filled
    if (paragraph.trim() === "") {
      alert("Please fill in the paragraph");
      return;
    }

    // Save paragraph to local storage
    localStorage.setItem("Paragraph", paragraph);

    // Navigate to the next page
    router.push("/resultpage/page3");
  };

  return (
    <div className="h-screen text-sm relative">
      <div className=" absolute -z-10"></div>
      <h1 className="p-4 absolute">Apply</h1>
      <Link href='/homepage/page' className="p-4 top-8 text-sm absolute">
        <button className="flex items-center gap-2" onClick={handleBackToCountry}><FaArrowLeft/> BACK</button>
      </Link>
      <div className="hidden sm:flex justify-center">
        <h1  className="p-4 text-sm absolute">
        your application
        </h1>
        <div className="p-4 top-9 flex gap-2 text-sm absolute">
          <div className=" h-[2px] w-16 bg-[#be9f56]"></div>
          <div className=" h-[2px] w-16 bg-[#be9f56]"></div>
          <div className=" h-[2px] w-16 bg-black"></div>
        </div>
      </div>

      <div className="h-full flex justify-center items-center">
        <form onSubmit={handleStart} className="relative m-4 w-full max-w-2xl rounded-xl">
          {/* Paragraph Text Area */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <textarea
              rows="8"
              placeholder="Type your paragraph here..."
              className="w-full md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
          </div>

          {/* Continue Button */}
          <div className="max-md:flex max-md:w-full max-md:justify-center absolute -bottom-10  md:-right-10 md:bottom-8">
            <button className="rounded-lg bg-black text-white h-24 w-24 text-xs uppercase" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Images */}
      <div id="bottom">
        <Image
          className="max-w-[180px] absolute bottom-8 p-3 md:max-w-[220px] lg:max-w-[260px]"
          alt=""
          width={400}
          height={400}
          src={ZimaTeam}
        />
        <Image
          className="max-h-[60px] md:max-h-[100px] w-auto absolute bottom-8 p-2 right-0 flex max-w-max"
          alt=""
          width={400}
          height={400}
          src={Intern}
        />
      </div>
    </div>
  );
};

export default ResultPagefour;
