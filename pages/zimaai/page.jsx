import React, { useEffect } from 'react';
import BG from '@/public/Assets/bgwhitelogo.svg';
import Zima from '@/public/Assets/ZimaAI.svg';
import Ai from '@/public/Assets/AI.svg';
import Down from '@/public/Assets/downarrow.svg';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ZimaAI = () => {
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
    <div className="h-screen relative ">
      <motion.div
        ref={bgRef}
        initial={{ opacity: 0 }}
        animate={bgControls}
        className="absolute h-full w-full -z-10 flex justify-center items-center"
      >
        <Image
          className="p-4 md:w-[500px] xl:w-[600px]"
          alt=""
          width={400}
          height={400}
          src={Zima}
        />
      </motion.div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="space-y-20">
          <p className="max-md:text-xs text-center text-[#939393]">
            artificial intelligence for everyone
          </p>
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
      <div className="absolute bottom-0 right-0  sm:items-end">
            <div className="grid grid-flow-col items-center gap-4 p-4 md:p-8 ">
            <Image className="max-h-[90px] max-md:max-w-[100px] lg:max-h-[100px] md:w-full flex" alt="" width={400} height={400} src={Ai}/>
            
            </div>
          </div>
    </div>
  );
};

export default ZimaAI;
