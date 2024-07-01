"use client";
import React from "react";
import { motion } from "framer-motion";
import { KitCard } from "./KitCards";

const SolarKit = () => {
  const section6 = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.2) {
            setInView(true);
          } else if (entry.intersectionRatio <= 0.1) {
            setInView(false);
          }
        } else {
          if (inView) {
            setInView(false);
          }
        }
      },
      {
        threshold: [0.1, 0.2], // trigger at 10% and 50%
      }
    );

    if (section6.current) {
      observer.observe(section6.current);
    }

    return () => {
      if (section6.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section6.current);
      }
    };
  }, [inView]);
  return (
    <section id="ourservices" ref={section6} className="w-[100%] md:h-[100%] h-auto relative md:my-10">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.9 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 200, scale: 0.9 }
        }
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-[90%] h-full bg-transparent transform mx-auto rounded-xl z-10 flex flex-col text-center justify-center items-center space-y-2 py-10"
      >
        <div className="w-[100%] md:h-[100%] h-auto flex flex-col justify-center items-center py-10">
        <motion.h1 
        whileInView={{scale : 1.2}}
        transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1]}}
        className="text-4xl text-yellow-400 font-bold md:w-[40%] w-[80%] md:py-1 font-sarif">{"SOLAR "}<span className='text-white'>KIT</span></motion.h1>
          <p className="md:w-[50%] w-[90%] text-base text-white/80 md:py-5 py-1">
            {
              "Complete solar system kits, ready for installation. They can be used to supplement on-grid housing, a complete self- sustaining home or some combination of the two."
            }
          </p>
          <div className="md:w-[100%] md:h-[80%] w-[100%] h-auto flex md:flex-row flex-col  md:justify-evenly justify-around items-center md:mt-10">
            <KitCard
              text={
                "Off-Grid solar panel kits are designed for complete energy independence, providing power in remote locations without access to the grid. They include batteries for energy storage, ensuring a consistent power supply even during cloudy days or at night."
              }
              srcLink={"/images/kit_0.jpeg"}
              title={"Off Grid"}
            />
            <KitCard
              text={
                "On-Grid solar panel kits connect directly to the local power grid, allowing you to offset your electricity usage and reduce energy bills. These systems are ideal for areas with reliable grid access and can take advantage of net metering."
              }
              srcLink={"/images/kit_1.png"}
              title={"On Grid"}
            />
            <KitCard
              text={
                "Hybrid solar panel kits offer the best of both worlds, combining the benefits of On-Grid and Off-Grid systems. They connect to the grid while also incorporating battery storage, allowing for energy independence and backup power during outages."
              }
              srcLink={"/images/kit_2.jpeg"}
              title={"Hybrid"}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SolarKit;
