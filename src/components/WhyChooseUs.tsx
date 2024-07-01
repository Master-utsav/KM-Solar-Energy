"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
  const section4 = React.useRef<HTMLDivElement>(null);
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

    if (section4.current) {
      observer.observe(section4.current);
    }

    return () => {
      if (section4.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section4.current);
      }
    };
  }, [inView]);
  return (
    <section ref={section4} className="w-[100%] md:h-auto h-[100%]">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -50, scale: 0.9 }
        }
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className="md:w-[75%] w-[90%] h-[100%] flex flex-col-reverse md:flex-row  mx-auto bg-black justify-between items-center md:px-5 px-2 rounded-xl md:py-5 py-4"
      >
        <div className="w-[100%]  mx-auto flex flex-col md:space-y-2 md:pl-10 pl-1 md:text-start text-center">
          <motion.p 
            initial={{opacity: 0 , y:-100}}
            animate={
            inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -100 }
            }
            transition={{ duration: 0.5, ease: "easeInOut"}}
            className="text-yellow-400 md:text-lg sm:text-base md:pb-5 py-2">WHY CHOOSE US</motion.p>
          <motion.h1
            initial={{ opacity: 0,scale: 0.6 }}
            animate={
              inView
                ? { opacity: 1,  scale: 1 }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{ duration: 1, ease: "easeInOut"}}
            className="md:text-4xl text-2xl text-white font-bold md:w-[50%] w-[100%] py-2 font-sarif "
          >
            {"UNLOCK TOP-TIER SOLAR & "}
            <span className="text-yellow-400">STORAGE SOLUTIONS</span>
          </motion.h1>
          <motion.p 
            initial={{opacity: 0 , x:-100}}
            animate={
            inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.5, ease: "easeInOut"}}
            className="md:w-[50%] w-[100%] text-base text-white/80">
                {
                "Your sustainable energy partner, committed to innovative solutions for greener homes worldwide."
                }
          </motion.p>
          <ul className="text-white md:py-4 py-2 md:w-[70%] w-[100%]">
            <li className="space-y-1 py-2">
              <h5>TRUSTED EXPERTISE</h5>
              <p className="text-sm text-white/80">
                KM Renewables Ltd, our seasoned professionals bring years of
                experience and expertise to every project.
              </p>
            </li>
            <li className="space-y-1 py-2">
              <h5>SUPERIOR QUALITY</h5>
              <p className="text-sm text-white/80">
                We pride ourselves on using only the highest quality materials
                and industry-leading technologies in all our installations
              </p>
            </li>
          </ul>
          <Link href={"/contact"}>
          <button className="bg-[#eeec45d7] text-black  px-1 py-2 rounded-2xl md:w-[22%] w-[60%] hover:bg-[#e8ee4523] hover:text-white transition-all ease-in-out">
            Get a free estimate
          </button>
          </Link>
        </div>
        <motion.div
          whileHover={{scale : 1.05}}
          transition={{duration: 0.8 , ease : [0.34, 1.56, 0.64, 1]}}
          className="md:w-[40%] w-[80%] h-[80%] md:h-[80vh] bg-cover bg-center bg-no-repeat transform rounded-xl z-10 opacity-100 inset-1 border-2 border-yellow-400"
          style={{ backgroundImage: "url(/images/img_wcu.jpg)" }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
