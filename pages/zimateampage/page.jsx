import React, { useEffect } from 'react';
import BG from '@/public/Assets/bgwhitelogo.svg';
import Down from '@/public/Assets/downarrow.svg';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ZimaTeamPage = () => {
  const textControls = useAnimation();
  const bgControls = useAnimation();

  const [textRef, textInView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  const [bgRef, bgInView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    if (textInView) {
      textControls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    } else {
      textControls.start({ x: -100, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (bgInView) {
      bgControls.start({ opacity: 1, transition: { duration: 2 } });
    } else {
      bgControls.start({ opacity: 0, transition: { duration: 1 } });
    }
  }, [bgControls, bgInView]);

  return (
    <div className="h-screen w-full relative invert bg-white">
      <motion.div
        ref={bgRef}
        initial={{ opacity: 0 }}
        animate={bgControls}
        className="absolute h-full w-full -z-10 flex justify-left items-center"
      >
        <Image
          className="w-full md:w-[700px] xl:w-[1000px]"
          alt=""
          width={400}
          height={400}
          src={BG}
        />
      </motion.div>

      <motion.div
        ref={textRef}
        initial={{ x: -100, opacity: 0 }}
        animate={textControls}
        className="absolute h-full w-full flex items-center"
      >
        <div className="space-y-3 p-4 md:p-8 w-full flex flex-col">
          <h3 className="text-2xl">Discover</h3>
          <h2 className="text-3xl">a new world</h2>
          <p className="text-sm">together, we create and build a better world</p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="space-y-12">
          <p className="max-md:text-xs text-center">
            services in over one hundred and twenty countries.
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
    </div>
  );
};

export default ZimaTeamPage;
