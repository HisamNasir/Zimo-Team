import Head from "next/head";
import Link from "next/link";
import BG from "@/public/Assets/bgwhitelogo.svg"
import ZimoTeam from "@/public/Assets/zimateamlogo.svg"
import ZimoGroup from "@/public/Assets/zimogroup.svg"
import Image from 'next/image'
export default function Home() {
  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
        <div className="h-screen w-screen relative">
          <div className=" absolute h-full w-full -z-10 flex justify-center items-center"><Image className=" px-8 blur-[10px] md:w-[700px] xl:w-[1000px]" alt="" width={400} height={400} src={BG}/></div>
          <div className=" absolute h-full w-full flex  md:items-center">
            <div className=" space-y-4 p-4">
          <Image className=" w-[300px] md:w-[300px]  lg:w-[400px] xl:w-[500px]" alt="" width={400} height={400} src={ZimoTeam}/>
          <Image className="w-[200px]  lg:w-[250px] xl:w-[300px]" alt="" width={400} height={400} src={ZimoGroup}/>
            </div>
          </div>
          <div className="absolute h-full w-full flex justify-center  items-center">
            <Link href="/homepage/page">
            Click here to proceed
            </Link>
          </div>
          <div className="absolute h-full w-full flex justify-center  items-end">
hhs
          </div>
        </div>
      </main>
    </>
  );
}
