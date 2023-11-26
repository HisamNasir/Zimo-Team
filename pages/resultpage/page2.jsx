// // DisplayDataPage.js
// import React, { useEffect, useState } from "react";

// const DisplayDataPage = () => {
//   const [storedData, setStoredData] = useState({});

//   useEffect(() => {
//     // Retrieve data from local storage
//     const storedEmail = localStorage.getItem("Email") || "";
//     const storedConfirmEmail = localStorage.getItem("ConfirmEmail") || "";
//     const storedFirstName = localStorage.getItem("FirstName") || "";
//     const storedLastName = localStorage.getItem("LastName") || "";
//     const storedDateOfBirth = localStorage.getItem("DateOfBirth") || "";
//     const storedCountryName = localStorage.getItem("CountryName") || "";
//     const storedAreaCode = localStorage.getItem("AreaCode") || "";
//     const storedPhoneNumber = localStorage.getItem("PhoneNumber") || "";

//     // Set the retrieved data in state
//     setStoredData({
//       email: storedEmail,
//       confirmEmail: storedConfirmEmail,
//       firstName: storedFirstName,
//       lastName: storedLastName,
//       dateOfBirth: storedDateOfBirth,
//       countryName: storedCountryName,
//       areaCode: storedAreaCode,
//       phoneNumber: storedPhoneNumber,
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Display Data Page</h1>
//       {/* Display the retrieved data */}
//       <p>Confirm Email: {storedData.confirmEmail}</p>
//       <p>Email: {storedData.email}</p>
//       <p>First Name: {storedData.firstName}</p>
//       <p>Last Name: {storedData.lastName}</p>
//       <p>Date of Birth: {storedData.dateOfBirth}</p>
//       <p>Country Name: {storedData.countryName}</p>
//       <p>Area Code: {storedData.areaCode}</p>
//       <p>Phone Number: {storedData.phoneNumber}</p>
//     </div>
//   );
// };



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
import Link from 'next/link';
import countryFlagIcons from 'country-flag-icons/react/3x2';
import 'country-flag-icons/react/3x2';

const ResultPage = () => {
  const [countries, setCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const storedCountry = localStorage.getItem("CountryName") || "Unknown Country";
  const [phoneNumber, setPhoneNumber] = useState("");
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    // Retrieve data from local storage
    const storedEmail = localStorage.getItem("Email") || "";
    const storedConfirmEmail = localStorage.getItem("ConfirmEmail") || "";
    const storedFirstName = localStorage.getItem("FirstName") || "";
    const storedLastName = localStorage.getItem("LastName") || "";
    const storedDateOfBirth = localStorage.getItem("DateOfBirth") || "";
    const storedCountryName = localStorage.getItem("CountryName") || "";
    const storedAreaCode = localStorage.getItem("AreaCode") || "";
    const storedPhoneNumber = localStorage.getItem("PhoneNumber") || "";

    // Set the retrieved data in state
    setStoredData({
      email: storedEmail,
      confirmEmail: storedConfirmEmail,
      firstName: storedFirstName,
      lastName: storedLastName,
      dateOfBirth: storedDateOfBirth,
      countryName: storedCountryName,
      areaCode: storedAreaCode,
      phoneNumber: storedPhoneNumber,
    });
  }, []);
  const [careerOptions, setCareerOptions] = useState([
    { value: "software", label: "Software Development" },
    { value: "game_design", label: "Game Design" },
    // Add more career options as needed
  ]);

  const router = useRouter();

  const handleBackToCountry = () => {
    setShowCareerOptions(false);
  };


  const handleStart = () => {

      router.push("/resultpage/page2");

  };


  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    localStorage.setItem("Email", emailValue);
  };

  const handleConfirmEmailChange = (event) => {
    const confirmEmailValue = event.target.value;
    setConfirmEmail(confirmEmailValue);
    // You may want to add validation here before saving to localStorage
    localStorage.setItem("ConfirmEmail", confirmEmailValue);
  };


  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    const countryList = data.map((country) => ({
      value: country.name,
      label: `+${country.callingCodes[0]}`, // Use the calling code as the label
      code: country.alpha2Code, // Country code
    }));
    setCountries(countryList);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    // Fetch the list of countries from an API or any data source
    // For demonstration purposes, I'm using a static list
    const fetchCountries = async () => {
      // Replace this with your actual API endpoint for fetching countries
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const countryList = data.map((country) => ({
        value: country.name.common,
        label: country.name.common,
      }));
      setCountries(countryList);
    };

    fetchCountries();
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
      <div className=" absolute -z-10">

      </div>
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
        <div className="relative m-4 w-full max-w-2xl rounded-xl">
          {/* Email Address */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div
              className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center"
            >
         <p> {storedData.email}</p>

            </div>
          </div>
          {/* Confirm Email Address */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div
              className="uppercase w-full md:w-[380px] text-sm p-2 text-center"
            >
         <p> {storedData.firstName} {storedData.lastName}</p>
            </div>
          </div>
          {/* First Name */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="first name"
              className="uppercase w-full md:w-[380px]  focus:outline-[#be9f56] outline-1 focus:outline rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"

            />
          </div>

          {/* Last Name */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
              className="uppercase w-full  focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"

            />
          </div>
          {/* Date of Birth */}

          {/* Displayed Country */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]">
              {storedCountry}
            </div>
          </div>
          {/* Country and Phone Number */}
          <div className="px-12 mb-24 md:pb-2 flex md:justify-center">
            <div className="sm:grid sm:grid-cols-4 max-sm:space-y-2 gap-2 md:w-[380px] rounded-lg text-sm w-full">

              <input
                type="text"
                placeholder="Phone"
                className="uppercase w-full  col-span-3 p-2 focus:outline-[#be9f56] outline-1 focus:outline  rounded-lg text-sm text-center border focus:border-[#be9f56]"

              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="max-md:flex max-md:w-full max-md:justify-center absolute -bottom-10  md:-right-10 md:bottom-8">
            <button className="rounded-lg bg-black text-white h-24 w-24 text-xs uppercase" onClick={handleStart}>
              continue
            </button>
          </div>
        </div>
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

export default ResultPage;
