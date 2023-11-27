
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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCareerOptions, setShowCareerOptions] = useState(false);
  const [selectedCareerOption, setSelectedCareerOption] = useState("");
  const storedCountry = typeof window !== 'undefined' ? localStorage.getItem("CountryName") || "Unknown Country" : "Unknown Country";
const [displayedCountry, setDisplayedCountry] = useState(storedCountry);
const storedCareerOption = typeof window !== 'undefined' ? localStorage.getItem("CareerOption") || "Unknown Career Option" : "Unknown Career Option";

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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


  const handleStart = (e) => {
    e.preventDefault();

    // Check if all inputs are filled
    if (
      email.trim() === "" ||
      confirmEmail.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      dateOfBirth.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      alert("Please fill in all required fields");
      return;
    }

    router.push("/resultpage/page2");
  };

  const handleDateOfBirthChange = (event) => {
    const dob = event.target.value;
    setDateOfBirth(dob);
    localStorage.setItem("DateOfBirth", dob);
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

  const handleFirstNameChange = (event) => {
    const firstNameValue = event.target.value;
    setFirstName(firstNameValue);
    localStorage.setItem("FirstName", firstNameValue);
  };

  const handleLastNameChange = (event) => {
    const lastNameValue = event.target.value;
    setLastName(lastNameValue);
    localStorage.setItem("LastName", lastNameValue);
  };
  const handleCountryChange = (selectedOption) => {
    const countryCode = selectedOption ? selectedOption.code : "";
    const phoneNumberValue = ""; // You should get the value from the phone number input field here
    const phoneNumberWithCode = `${countryCode}${phoneNumberValue}`;
  
    setSelectedOption(selectedOption);
  
    // Save the country code separately as "area code"
    localStorage.setItem("AreaCode", countryCode);
  
    // Do not change the existing "CountryName" in local storage
    const existingCountryName = localStorage.getItem("CountryName") || "";
    localStorage.setItem("CountryName", existingCountryName);
  
    // Save the combined phone number with code
    localStorage.setItem("PhoneNumber", phoneNumberWithCode);
  };
  

  const handlePhoneNumberChange = (event) => {
    const phoneNumberValue = event.target.value;
    setPhoneNumber(phoneNumberValue);
    localStorage.setItem("PhoneNumber", phoneNumberValue);
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
          <div className=" h-[2px] w-16 bg-black"></div>
          <div className=" h-[2px] w-16 bg-black"></div>

        </div>
      </div>

      <form onSubmit={handleStart} className="h-full flex justify-center items-center">
        <div className="relative m-4 w-full max-w-2xl rounded-xl">
          {/* Email Address */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="email address"
              type="email"
              className="uppercase w-full focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          {/* Confirm Email Address */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="confirm email address"
              type="email"
              className="uppercase w-full md:w-[380px]  focus:outline-[#be9f56] outline-1 focus:outline rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
              onChange={handleConfirmEmailChange}
              value={confirmEmail}
            />
          </div>
          {/* First Name */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="first name"
              className="uppercase w-full md:w-[380px]  focus:outline-[#be9f56] outline-1 focus:outline rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
              onChange={handleFirstNameChange}
              value={firstName}
            />
          </div>
          <p className="text-[8pt] tracking-wider pb-1 normal-case text-center text-gray-600">
            Use your legal name as it appears on your official documents
          </p>
          {/* Last Name */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
              className="uppercase w-full  focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
              onChange={handleLastNameChange}
              value={lastName}
            />
          </div>
          {/* Date of Birth */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              type="date"
              placeholder="Date of Birth"
              className="uppercase w-full focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
              onChange={handleDateOfBirthChange}
              value={dateOfBirth}
            />
          </div>
          {/* Displayed Country */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]">
              {storedCountry}
            </div>
          </div>
          {/* Country and Phone Number */}
          <div className="px-12 mb-24 md:pb-2 flex md:justify-center">
            <div className="sm:grid sm:grid-cols-4 max-sm:space-y-2 gap-2 md:w-[380px] rounded-lg text-sm w-full">
              <Select
                className="w-full rounded-xl col-span-1"
                id="country"
                name="country"
                value={selectedOption}
                onChange={handleCountryChange}
                options={countryOptions.map(({ value, label, code }) => ({
                  value,
                  label: (
                    <div className="flex items-center">
                      {code ? (
                        <Image
                          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                          alt={`flag-${code}`}
                          width={24}
                          height={16}
                          className="mr-2"
                        />
                      ) : null}
                      {label}
                    </div>
                  ),
                  code,
                }))}
              />
              <input
                type="text"
                placeholder="Phone"
                onChange={handlePhoneNumberChange}
                className="uppercase w-full  col-span-3 p-2 focus:outline-[#be9f56] outline-1 focus:outline  rounded-lg text-sm text-center border focus:border-[#be9f56]"
                value={phoneNumber}
              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="max-md:flex max-md:w-full max-md:justify-center absolute -bottom-10  md:-right-10 md:bottom-8">
            <button className="rounded-lg bg-black text-white h-24 w-24 text-xs uppercase" type="submit">
              continue
            </button>
          </div>
        </div>
      </form>

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
