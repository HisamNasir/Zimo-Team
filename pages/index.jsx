import Head from "next/head";
import Link from "next/link";
import BG from "@/public/Assets/bgwhitelogo.svg"
import ZimoTeam from "@/public/Assets/zimateamlogo.svg"
import ZimoGroup from "@/public/Assets/zimogroup.svg"
import Zmeet from "@/public/Assets/zmeet.svg"
import Zhub from "@/public/Assets/thub.svg"
import AI from "@/public/Assets/AI.svg"
import Zdoc from "@/public/Assets/pow-zidoc.png"
import Intern from "@/public/Assets/zimainternshipsmall.svg"
import Career from "@/public/Assets/ZIMOCAREERSLogo.png"
import Image from 'next/image'
export default function Home() {
  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>Boilerplate</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/country-flag-icons@1.1.2/css/country-flag-icons.css" />

      </Head>

      <main>
        <div className="h-screen relative">
          <div className=" absolute h-full w-full -z-10 flex justify-center items-center"><Image className=" px-8 blur-[10px] w-full md:w-[700px] xl:w-[1000px]" alt="" width={400} height={400} src={BG}/></div>
          <div className=" absolute h-full w-full flex  md:items-center">
            <div className="space-y-6 p-4 md:p-8">
          <Image className=" w-[300px] md:w-[250px]  lg:w-[400px] xl:w-[500px]" alt="" width={400} height={400} src={ZimoTeam}/>
          <Image className="w-[200px]  lg:w-[250px] xl:w-[300px]" alt="" width={400} height={400} src={ZimoGroup}/>
            </div>
          </div>
          <div className="absolute h-full w-full z-10 flex justify-center  items-center">
            <Link className=" hover:text-[#be9f56] text-lg lg:text-xl" href="/homepage/page">
            Click here to proceed
            </Link>
          </div>
          <div className="absolute h-full w-full flex justify-center  items-end">
            <div className="grid grid-cols-3 sm:grid-flow-col items-center gap-4 p-4 ">
            <Image className="max-h-[40px] max-md:max-w-[50px] lg:max-h-[60px] md:w-full flex item-center" alt="" width={400} height={400} src={Career}/>
            <Image className="max-h-[40px] max-md:max-w-[50px] lg:max-h-[60px] md:w-full  flex item-center" alt="" width={400} height={400} src={Intern}/>
            <Image className="max-h-[40px] max-md:max-w-[50px] lg:max-h-[60px] md:w-full flex item-center" alt="" width={400} height={400} src={Zdoc}/>
            <Image className="max-h-[40px] max-md:max-w-[50px] lg:max-h-[60px] md:w-full flex item-center" alt="" width={400} height={400} src={AI}/>
            <Image className="max-h-[40px] max-md:max-w-[80px] lg:max-h-[60px] md:w-full flex item-center" alt="" width={400} height={400} src={Zhub}/>
            <Image className="max-h-[40px] max-md:max-w-[50px] lg:max-h-[60px] md:w-full flex item-center" alt="" width={400} height={400} src={Zmeet}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
