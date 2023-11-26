import React, { useEffect } from "react";
import Image from "next/image";
import Down from "@/public/Assets/downarrow.svg";
import Sign from "@/public/Assets/zidoc-sign.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ZdocImg from "@/public/Assets/zdoc.svg";
const Zdoc = () => {
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
        className="absolute h-full w-full  flex justify-center items-center"
      >
        <Image
          className="p-4 md:w-[200px] xl:w-[300px]"
          alt=""
          width={400}
          height={400}
          src={ZdocImg}
        />
      </motion.div>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="space-y-20">
          <p className="max-md:text-xs text-center text-[#939393]">
            document-signing software technology that let's you sign documents
            online.
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
      <div className="absolute  max-sm:flex max-sm:justify-center max-sm:w-full bottom-6 sm:bottom-0 sm:right-0 ">
        <div className="grid grid-flow-col items-center gap-4 py-4 sm:px-8 ">
          <Image
            className="max-w-[200px] md:max-w-[250px] flex"
            alt=""
            width={400}
            height={400}
            src={Sign}
          />
        </div>
      </div>
    </div>
  );
};

export default Zdoc;
