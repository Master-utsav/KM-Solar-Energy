"use client"
import React from 'react'
import { Card } from './Cards'
import { motion } from 'framer-motion';


const OurServices = () => {
  const section5 = React.useRef<HTMLDivElement>(null);
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
        threshold: [0.1, 0.2],
      }
    );

    if (section5.current) {
      observer.observe(section5.current);
    }

    return () => {
      if (section5.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section5.current);
      }
    };
  }, [inView]);
  return (
    <section  ref={section5} className="w-[100%] md:h-[100%] h-auto relative md:my-10 ">
    <motion.div 
         initial={{ opacity: 0, y: 200, scale: 0.9 }}
         animate={
           inView
             ? { opacity: 1, y: 0, scale: 1 }
             : { opacity: 0, y: 50, scale: 0.9 }
         }
         transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
      className="w-[90%] h-full bg-cover bg-center bg-no-repeat transform mx-auto rounded-xl z-10 flex flex-col text-center justify-center items-center space-y-2 py-10"
      style={{ backgroundImage: "url(/images/solar_pannel_bg.jpg)" }}>
        <div className='w-[100%] md:h-[100%] h-auto flex flex-col justify-center items-center md:py-20' >
        <motion.p 
        whileInView={{rotateY : 360}}
        transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1] , delay:1}}
        className='text-yellow-400 text-lg md:py-5 py-1'>Our Services</motion.p>
        <motion.h1 
        whileHover={{scale : 1.2}}
        transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1]}}
        className="text-4xl text-white font-bold md:w-[40%] w-[90%] py-1 font-sarif">{"A BETTER FUTURE FOR YOU AND "}<span className='text-yellow-400 block'>THE PLANET</span></motion.h1>
        <p className='md:w-[50%] w-[90%] text-base text-white/80 md:pb-5 pb-1'>{"With our integrated services, including solar installation, battery storage, and roofing expertise, we provide complete energy security for residential, commercial and agricultural."}</p>
        <div className='md:w-[100%] md:h-[80%] w-[100%] h-auto flex items-center  md:flex-row flex-col md:justify-evenly justify-around'>
            <Card text={"Residential"} srcLink={"/images/solar_pannel_1.png"}/>
            <Card text={"Agriculture"} srcLink={"/images/solar_pannel_2.png"}/>
            <Card text={"Industry"} srcLink={"/images/solar_pannel_3.png"}/>
            </div>
        </div>
        </motion.div>
    </section>
  )
}

export default OurServices
