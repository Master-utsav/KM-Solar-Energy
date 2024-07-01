"use client";
import React from "react";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const SubHeader = () => {
  const section2 = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  const listItems = [
    "Partner with over 100 top-tier universities and companies",
    "Collaborate with 100+ universities and industry leaders.",
    "Align with leading universities and top-tier industry partners",
    "Forge partnerships with universities and industry leaders",
  ];

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

    if (section2.current) {
      observer.observe(section2.current);
    }

    return () => {
      if (section2.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section2.current);
      }
    };
  }, [inView]);

  return (
    <section ref={section2} className="w-[80%] h-[100%] md:h-[50%] md:my-20 mx-auto flex flex-col md:flex-row relative">
  <div className="w-full md:w-[50%] h-[40%] md:h-[100%] bg-cover bg-center bg-no-repeat rounded-xl z-10 opacity-80 md:order-2">
    <motion.div
      initial={{ opacity: 0, x: 500, scale: 0.9 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 500, scale: 0.9 }}
      transition={{ duration: 2, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ backgroundImage: "url(/images/img_sub_header.jpg)" }}
      className="w-full h-[100%] rounded-xl md:w-[90%] md:h-full bg-cover bg-center bg-no-repeat z-10 opacity-80 md:order-2"
    ></motion.div>
  </div>
  <div className="w-full md:w-[100%] md:h-full h-auto flex flex-col md:justify-between  md:py-0 py-2  justify-start items-start md:order-1 md:space-y-3 space-y-1">
  <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={inView? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:text-4xl text-2xl text-black font-bold bg-clip-text text-transparent bg-text-gradient md:w-[70%] w-[100%] py-1 font-sarif"
    >
      The{" "}
      <span className="text-green-800 bg-white/30 rounded-lg inline-block px-1">
        Friendliest
      </span>{" "}
      Installers in your{" "}
      <span className="text-green-800 bg-white/30 rounded-lg px-1 inline-block md:text-3xl text-xl">
        CITY
      </span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full md:w-[80%] text-base"
    >
      {"At KM Solar Energy, our goal is to empower our customers with sustainable solutions. We're passionate about using the best products in our installations and will never upsell you on unnecessary equipment. You can count on us for honest advice without any high-pressure sales tactics. Our commitment to quality craftsmanship ensures that we consistently deliver results that surpass your expectations."}
    </motion.p>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="text-green-800 md:space-y-2 space-y-1"
    >
      {listItems.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="flex items-center text-start"
        >
          <VscDebugBreakpointLog/> <span className="pl-2">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
</section>

  );
};

export default SubHeader;
