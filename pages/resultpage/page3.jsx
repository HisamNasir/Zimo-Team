
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Intern from "@/public/Assets/zimainternshipsmall.svg";
import ZimaTeam from "@/public/Assets/zimateamlogo.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ResultPagethree = () => {
  const router = useRouter();
  const [qualification, setQualification] = useState("");
  const [yearOfCompletion, setYearOfCompletion] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [storedData, setStoredData] = useState({});
  const handleBackToCountry = () => {
    router.back();
  };

  const handleStart = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      qualification.trim() === "" ||
      yearOfCompletion.trim() === "" ||
      universityName.trim() === "" ||
      yearsOfExperience.trim() === "" ||
      employmentStatus.trim() === "" ||
      cvFile === null
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Save input values to local storage
    localStorage.setItem("Qualification", qualification);
    localStorage.setItem("YearOfCompletion", yearOfCompletion);
    localStorage.setItem("UniversityName", universityName);
    localStorage.setItem("YearsOfExperience", yearsOfExperience);
    localStorage.setItem("EmploymentStatus", employmentStatus);

    // You can save the CV file or handle it as needed
    // For now, just log the file name
    console.log("CV File:", cvFile.name);

    // Navigate to the next page
    router.push("/resultpage/page3");
};

const handleSupport=()=>{
    router.push("/resultpage/supportingstatement/page");
    
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };
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
  return (
    <div className="h-screen text-sm relative">
      <div className=" absolute -z-10"></div>
      <h1 className="p-4 absolute">Apply</h1>
      <Link href="/homepage/page" className="p-4 top-8 text-sm absolute">
        <button
          className="flex items-center gap-2"
          onClick={handleBackToCountry}
        >
          <FaArrowLeft /> BACK
        </button>
      </Link>
      <div className="hidden sm:flex justify-center">
        <h1 className="p-4 text-sm absolute">your application</h1>
        <div className="p-4 top-9 flex gap-2 text-sm absolute">
          <div className=" h-[2px] w-16 bg-[#be9f56]"></div>
          <div className=" h-[2px] w-16 bg-[#be9f56]"></div>
          <div className=" h-[2px] w-16 bg-[#be9f56]"></div>
        </div>
      </div>

      <div className="h-full flex justify-center items-center">
        <form
          onSubmit={handleStart}
          className="relative m-4 w-full max-w-2xl rounded-xl"
        >
                      <div className="px-12 pb-2 md:flex md:justify-center">
            <div className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center">
              <p> {storedData.email}</p>
            </div>
          </div>
          <div className="px-12 pb-2 md:flex md:justify-center">
            <div className="uppercase w-full md:w-[380px] text-sm p-2 text-center">
              <p> {storedData.firstName} {storedData.lastName}</p>
            </div>
          </div>
          {/* Qualification Drop-down */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center border bg-white focus:border-[#be9f56]"
            >
              <option value="" disabled>
                Select Qualification
              </option>
              <option value="BA">BA</option>
              <option value="BBA">BBA</option>
              <option value="BSCS">BSCS</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Year of Completion Drop-down */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <select
              value={yearOfCompletion}
              onChange={(e) => setYearOfCompletion(e.target.value)}
              className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center border bg-white focus:border-[#be9f56]"
            >
              <option value="" disabled>
                Select Year of Completion
              </option>
              {/* Generate last 30 years dynamically */}
              {Array.from(
                { length: 30 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* University Name Input */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <input
              placeholder="University Name"
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              className="uppercase w-full bg-white focus:outline-[#be9f56] outline-1 focus:outline md:w-[380px] rounded-lg text-sm p-2 text-center border focus:border-[#be9f56]"
            />
          </div>

          {/* Years of Experience Drop-down */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <select
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center border bg-white focus:border-[#be9f56]"
            >
              <option value="" disabled>
                Select Years of Experience
              </option>
              {/* Generate options dynamically */}
              {Array.from({ length: 31 }, (_, i) => i).map((year) => (
                <option key={year} value={year}>
                  {year} {year === 1 ? "Year" : "Years"}
                </option>
              ))}
            </select>
          </div>

          {/* Employment Status Drop-down */}
          <div className="px-12 pb-2 md:flex md:justify-center">
            <select
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 text-center bg-white border focus:border-[#be9f56]"
            >
              <option value="" disabled>
                Select Employment Status
              </option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
              <option value="EmployedPartTime">Employed (Part-Time)</option>
              <option value="EmployedFullTime">Employed (Full-Time)</option>
              <option value="EmployedInternship">Employed (Internship)</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* CV/Resume Input */}
          <div className="px-12 flex flex-col items-center mb-24 md:mb-2">
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              className="uppercase w-full md:w-[380px] rounded-lg text-sm p-2 mb-2 text-center border focus:border-[#be9f56]"
            />
            <p className=" text-gray-700 text-xs text-center">
              UPLOAD YOUR Résumé IN ENGLISH AS DOCX OR PDF ONLY.
            </p>
          </div>

          {/* Continue Button */}
          <div className="max-md:flex max-md:w-full max-md:justify-center absolute -bottom-10 md:flex md:flex-col  md:-right-10 md:bottom-8">
            <button
              className="rounded-lg bg-black tracking-wider text-white h-24 w-24 m-2 text-xs uppercase"
              onClick={handleSupport}
            >
              <p className=" text-gray-500  text-[6pt]">optional</p>
              <p className="  text-[8pt] ">add supporting statement</p>
            </button>
            <button
              className="rounded-lg tracking-wider bg-black text-white h-24 w-24 m-2 text-xs uppercase"
              type="submit"
            >
              submit
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
        <p className=" w-full  absolute bottom-20 p-3 px-28 text-center text-[5pt] text-gray-500  ">
          By proceeding, you are confirming that you agree to the information
          you have provided to be used in accordance with
        </p>
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

export default ResultPagethree;
