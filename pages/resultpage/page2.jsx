


// ResultPagetwo.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Intern from "@/public/Assets/zimainternshipsmall.svg";
import ZimaTeam from "@/public/Assets/zimateamlogo.svg";
import { FaArrowLeft } from "react-icons/fa";
import BG from "@/public/Assets/bgwhitelogo.svg";

const ResultPagetwo = () => {
  const router = useRouter();
  const [storedData, setStoredData] = useState({});
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [nationalId, setNationalId] = useState("");

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

  const handleBackToCountry = () => {
    router.back();
  };

  const handleStart = (e) => {
    e.preventDefault();

    // Save input values to local storage
    localStorage.setItem("ZipCode", zipCode);
    localStorage.setItem("Address1", address1);
    localStorage.setItem("Address2", address2);
    localStorage.setItem("City", city);
    localStorage.setItem("StateRegion", stateRegion);
    localStorage.setItem("nationalId", nationalId);
    if (
      zipCode.trim() === "" ||
      address1.trim() === "" ||
      address2.trim() === "" ||
      city.trim() === "" ||
      stateRegion.trim() === "" ||
      zipCode.trim() === ""
    ) {
      alert("Please fill in all required fields");
      return;
    }
    // Navigate to the next page
    router.push("/resultpage/page3");
  };

  return (
    <div className="h-screen text-sm relative">
      <div className=" absolute -z-10"></div>
      <h1 className="p-4 absolute">Apply</h1>
      <Link href='/resultpage/page' className="p-4 top-8 text-sm absolute">
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
          {/* Email Address */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center">
              <p> {storedData.email}</p>
            </div>
          </div>
          {/* Confirm Email Address */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div className="uppercase w-full md:w-[380px] text-sm p-2 text-center">
              <p> {storedData.firstName} {storedData.lastName}</p>
            </div>
          </div>
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="NATIONAL ID NUMBER (CNIC)"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="uppercase w-full md:w-[380px]  focus:outline-[#be9f56] outline-1 focus:outline rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
            />
          </div>

          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="ADDRESS 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className="uppercase w-full  focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
            />
          </div>

          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              className="uppercase w-full  focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
            />
          </div>

          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="uppercase w-full  focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
            />
          </div>

          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="STATE / REGION"
              value={stateRegion}
              onChange={(e) => setStateRegion(e.target.value)}
              className="uppercase w-full  focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
            />
          </div>

          <div className="px-12 mb-24 md:mb-2 flex md:justify-center">
            <input
              type="text"
              placeholder="ZIP CODE / POST CODE"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="uppercase w-full  col-span-3 p-2 focus:outline-[#be9f56] md:w-[380px] outline-1 focus:outline  rounded-lg text-sm text-center border focus:border-[#be9f56]"
            />
          </div>

          <div className="max-md:flex max-md:w-full max-md:justify-center absolute -bottom-10  md:-right-10 md:bottom-8">
            <button className="rounded-lg bg-black text-white h-24 w-24 text-xs uppercase" type="submit">
              continue
            </button>
          </div>
        </form>
      </div>

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

export default ResultPagetwo;
