import React, { useEffect, useState } from "react";
import Image from "next/image";
import Down from "@/public/Assets/downarrow.svg";
import Intern from "@/public/Assets/zimainternshipsmall.svg";
import ZimaTeam from "@/public/Assets/zimateamlogo.svg";
import ZimaCareerImg from "@/public/Assets/Zimacareers.svg";
import BG from "@/public/Assets/bgwhitelogo.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Select from "react-select";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Application() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCareerOptions, setShowCareerOptions] = useState(false);
  const [selectedCareerOption, setSelectedCareerOption] = useState("");
  const [careerOptions, setCareerOptions] = useState([
    { value: "software", label: "Software Development" },
    { value: "game_design", label: "Game Design" },
    // Add more career options as needed
  ]);
  const router = useRouter();

  const handleBackToCountry = () => {
    setShowCareerOptions(false);
  };

  const handleCareerOptionChange = (selectedOption) => {
    setSelectedCareerOption(selectedOption ? selectedOption.label : "");
    localStorage.setItem("CareerOption", selectedOption ? selectedOption.label : "");
  };
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption ? selectedOption.label : "");
    setSelectedOption(selectedOption);
    localStorage.setItem("CountryName", selectedOption ? selectedOption.label : "");
    localStorage.setItem("CountryCode", selectedOption ? selectedOption.code : "");
  };
  const handleStart = () => {
    if (showCareerOptions) {
      // Navigate to the result page
      router.push("/resultpage/page");
    } else {
      setShowCareerOptions(true);
    }
  };
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
    
      // Ensure that the data is an array before using map
      if (Array.isArray(data)) {
        const countryList = data.map((country) => ({
          value: country.name.common,
          label: country.name.common,
          code: country.cca2, // Use cca2 for the country code
        }));
        setCountries(countryList);
      } else {
        console.error("Invalid response format:", data);
      }
    };
    
  
    fetchCountries();
  
    // Initialize state values with data from local storage
    const storedCountry = localStorage.getItem("CountryName") || "";
    const storedCountryCode = localStorage.getItem("CountryCode") || "";
    setSelectedCountry(storedCountry);
    setSelectedOption({ label: storedCountry, code: storedCountryCode });
  }, []);

  useEffect(() => {
    setCountryOptions(countries);
  }, [countries]);

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
    <div className="h-screen text-sm relative">
      <h1 className="p-4 absolute">
      Apply
      </h1>
      <h1 className="p-4 top-8 text-sm absolute">
        
      {showCareerOptions ? (
        <button className="flex items-center gap-2" onClick={handleBackToCountry}><FaArrowLeft/> BACK</button>
      ) : (
        ""
      )}
      </h1>

      <div className="h-full flex justify-center items-center">
        <div className="border relative border-[#be9f56]  m-4 w-full max-w-2xl rounded-xl">
          <p className="text-xs md:text-sm text-center pt-12 px-12">start your application</p>
          <div ref={bgRef} className="flex justify-center my-8 px-12 items-center">
            <Image
              className="p-8 w-[250px] invert md:w-[300px]"
              alt=""
              width={400}
              height={400}
              src={ZimaCareerImg}
            />
          </div>
          <div className="mb-8 md:mb-0 px-12 pb-12 md:flex md:justify-center">
<div className=" md:w-[320px] text-sm focus:outline-none">
          {showCareerOptions ? (
          <div>
            <Select 
              id="careerOption"
              name="careerOption"
              placeholder={selectedCareerOption}
              value={selectedCareerOption}
              onChange={handleCareerOptionChange}
              options={careerOptions}
              className="mt-2"
            />
          </div>
        ) : (
          <div className=" ">
            <Select
              id="country"
              name="country"
              value={selectedOption}
              onChange={handleCountryChange}
              options={countryOptions}
              className="mt-2"
            />
          </div>
        )}
</div>
          </div>
          <div className="max-md:flex  max-md:w-full max-md:justify-center absolute -bottom-10  md:-right-10 md:bottom-8">
        <button className="rounded-lg bg-black text-white h-24 w-24 text-xs" onClick={handleStart}>APPLY</button>
          </div>
        </div>
      </div>

      <div id="bottom">
        <Image
          className="max-w-[180px] absolute bottom-8 p-3 max-md:max-w-[220px] lg:max-w-[260px]"
          alt=""
          width={400}
          height={400}
          src={ZimaTeam}
        />
        <Image
          className="max-h-[60px] w-auto absolute bottom-8 p-2 right-0 flex max-w-max"
          alt=""
          width={400}
          height={400}
          src={Intern}
        />

        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="space-y-12">
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
    </div>
  );
}
