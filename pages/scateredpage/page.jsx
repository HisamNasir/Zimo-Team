import React, { useEffect } from 'react';
import Grid from '@/public/Assets/zimogroupgrid.png';
import ZimoGroup from '@/public/Assets/Group 4553.png';
import Down from '@/public/Assets/downarrow.svg';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScateredPage = () => {
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
    <div className="h-screen w-full relative bg-white invert ">
        <div className=' max-w-max'>
            <motion.div
                ref={bgRef}
                initial={{ opacity: 0 }}
                animate={bgControls}
                className="absolute h-full w-full invert blur-md -z-10 flex justify-center items-center"
            >
                <Image
                className="p-4 w-auto max-h-[80vh]"
                alt=""
                width={2000}
                height={1500}
                src={ZimoGroup}
                />
            </motion.div>
            <motion.div
                ref={bgRef}
                initial={{ opacity: 0 }}
                animate={bgControls}
                className="absolute h-full w-full z-0 flex justify-center items-center"
            >
                <Image
                className="p-4 w-auto max-h-[80vh]"
                alt=""
                width={2000}
                height={1500}
                src={Grid}
                />
            </motion.div>
        </div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="space-y-20">
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

export default ScateredPage;
