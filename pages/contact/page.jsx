import React from 'react'
import { FaEnvelope, FaGlobe, FaVoicemail } from 'react-icons/fa'
import Image from 'next/image';
import ZimaTeamImg from '@/public/Assets/zimateamlogo.svg'
import ZimaGroupImg from '@/public/Assets/zimogroup.svg'
import Avav from '@/public/Assets/zimogroup.svg'
const Contact = () => {
  return (
    <div>

      <div id="Section1" className="relative h-full  text-xs">      

        <div className=" h-full p-10">
          <div className="flex ">
          <div className="">
            <p className="">ENQUIRIES</p>
            <p>hello@zimogroup.org</p>
          </div>
          <p className="text-sm flex justify-center w-full  tra">
            CONTACT
          </p>
          </div>

          <div className="flex h-full justify-center items-center">
          <div className="lg:grid w-full h-full p-5 lg:grid-cols-2">
            <div>
            <div className="z-10 h-full flex items-center  text-center">
              <div>

              <div>
                <div className="my-5">
                  <div className="flex flex-col items-center gap-4 justify-center">
                    <Image alt='' src={ZimaTeamImg} className='w-[250px] md:w-[300px] xl:w-[400px]' />
                    <Image alt='' src={ZimaGroupImg} className='w-[200px] md:w-[250px] xl:w-[350px]' />
                    <Image alt='' src={Avav} className='w-[200px] md:w-[250px] xl:w-[350px]' />
                  </div>
                  <div>
                    <p className="flex justify-center text-center m-2 text-xs">ZIMO GROUP LIMITED</p>
                    <p className="flex text-center m-2 justify-center text-xs">
                      71 - 75 SHELTON STREET COVENT GARDEN LONDON WC2H 9JQ
                      ENGLAND UNITED KINGDOM
                    </p>
                    <div className="flex justify-center text-xs">
                      <div className="flex justify-center items-center">
                        <div className="flex mx-2 items-center gap-2">
                          <FaGlobe/>
                          <h1 className="">ZIMOGROUP.ORG</h1>
                        </div>
                        <div className="flex mx-2 items-center gap-2">
                          <FaEnvelope/>
                          <h1 className="">HELLO@ZIMOGROUP.ORG</h1>
                        </div>
                      </div>
                    </div>
                    <p className=" text-center">
                      REGISTERED IN ENGLAND 14383397
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            
            </div>
            <div id="grids" >
                <div className="md:grid md:grid-cols-2 h-full ">
                <div className="flex md:justify-end items-center h-full">
                <div>
                  <dl className="m-2">REAL ESATE</dl>
                  <dl className="m-2">realestate@zimogroup.org</dl>
                  <dl className="m-2">CARS</dl>
                  <dl className="m-2">cars@zimogroup.org</dl>
                  <dl className="m-2">YACHTS</dl>
                  <dl className="m-2">yachts@zimogroup.org</dl>
                  <dl className="m-2">WATCHES</dl>
                  <dl className="m-2">watches@zimogroup.org</dl>
                  <dl className="m-2">JET</dl>
                  <dl className="m-2">jet@zimogroup.org</dl>
                  <dl className="m-2">PRIVATE ISLANDS</dl>
                  <dl className="m-2">perivateislands@zimogroup.org</dl>
                  <dl className="m-2">DIAMONDS</dl>
                  <dl className="m-2">diamonds@zimogroup.org</dl>
                  <dl className="m-2">TRAVEL THE WORLD</dl>
                  <dl className="m-2">ttw@zimogroup.org</dl>
                </div>
                </div>
                <div className="flex md:justify-end">
                  <div className="grid grid-row-2">
                  <div className="my-5">
                  
                  <dl className="m-2">ADVERTISING</dl>
                  <dl className="m-2">advertising@zimogroup.org</dl>
                  <dl className="m-2">SPONSORSHIP</dl>
                  <dl className="m-2">sponsorship@zimogroup.org</dl>
                  <dl className="m-2">PARTNERS</dl>
                  <dl className="m-2">partners@zimogroup.org</dl>
                  <dl className="m-2">LEGAL</dl>
                  <dl className="m-2">legal@zimogroup.org</dl>
                  <dl className="m-2">CORPORATE</dl>
                  <dl className="m-2">corporate@zimogroup.org</dl>
                  <dl className="m-2">MARKEETING</dl>
                  <dl className="m-2">markeeting@zimogroup.org</dl>
                  </div>
                  <div className="my-5">
                  <dt>UNITED KINGDOM</dt>
                  <dl className="m-2">press-uk@zimogroup.org</dl>
                  <dl className="m-2">EUROPE</dl>
                  <dl className="m-2">press-eu@zimogroup.org</dl>
                  <dl className="m-2">NORTH AMERICA</dl>
                  <dl className="m-2">press-na@zimogroup.org</dl>
                  <dl className="m-2">MIDDLE EAST</dl>
                  <dl className="m-2">press-me@zimogroup.org</dl>
                  <dl className="m-2">ASIA/AUSTRALIA</dl>
                  <dl className="m-2">press-apac@zimogroup.org</dl>
                  <dl className="m-2">AFRICA</dl>
                  <dl className="m-2">press-af@zimogroup.org</dl>
                  <dl className="m-2">CHINA/HONG KONG</dl>
                  <dl className="m-2">press-ch@zimogroup.org</dl>
                  </div>
                </div>
                </div>
                
            </div>
            </div>


          </div>
          
          </div>

            <div className=" lg:flex mb-7 lg:items-end">
              <p className="">
                @ zimo Group 2023
                
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact

