"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import React from "react";

const SubHeader2 = () => {
  const section3 = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const contactNumber:string = process.env.NEXT_PUBLIC_CONTACT_NUMBER!;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.5) {
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
        threshold: [0.1, 0.5], // trigger at 10% and 50%
      }
    );
  
    if (section3.current) {
      observer.observe(section3.current);
    }
  
    return () => {
      if (section3.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section3.current);
      }
    };
  }, [inView]);

  return (
    <section id="whychooseus" ref={section3} className="w-[100%] md:h-[60%] h-[100%] md:my-10 my-20 ">
    <div className="w-[90%] h-full flex flex-col-reverse md:flex-row mx-auto bg-yellow-green-gradient justify-between items-center md:px-5 py-4 px-2 rounded-xl">
      <div className="w-[100%] flex flex-col space-y-4 md:pl-10 text-start ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl text-black font-bold bg-clip-text text-transparent bg-text-gradient md:w-[70%] py-1 "
        >
          {"Power that Doesn't Cost the Earth"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[80%] text-sm font-rubik"
        >
          {
            "At KM Solar Energy, we believe in powering a sustainable future without compromise. We prioritize top-tier products in our installations, ensuring quality and reliability at every step. Unlike others, we avoid unnecessary equipment and provide honest guidance, free from aggressive sales tactics. Our commitment to excellence ensures we consistently surpass your expectations, delivering sustainable power solutions that truly benefit the Earth."
          }
        </motion.p>
        <Link href={contactNumber}>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 1 }}
            className="bg-[#eeec45d7] text-black font-bold p-2 rounded-xl w-[40%] md:w-[30%] flex justify-center items-center gap-2"
          >
            <span className="text-3xl"><IoCallOutline /></span>
            Call me
          </motion.button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 20, y: 20 }}
        animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0.5, x: 20, y: 20 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="md:w-[70%] md:h-[100%] w-[100%] h-[80%] bg-cover bg-center  bg-no-repeat transform rounded-xl z-10 opacity-100 "
        style={{ backgroundImage: "url(/images/img_sub_header_2.png)" , backgroundSize: "cover",  backgroundPosition: "center", }}
      ></motion.div>
    </div>
  </section>
  
  );
};

export default SubHeader2;
