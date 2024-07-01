"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const title = React.useRef<HTMLHeadingElement>(null);
  const para = React.useRef<HTMLParagraphElement>(null);
  const section1 = React.useRef<HTMLDivElement>(null);
  const inView = useInView(section1, { once: true });

  const phoneNumber:string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!; 
  const message = "Hello, I'm interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const email:string = process.env.NEXT_PUBLIC_GMAIL!;
  console.log(process.env.GMAIL!)
  const subject = "Inquiry about services"; 
  const body = "Hello, I'm interested in your services."; 

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const gmailLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;


  useGSAP(() => {
    if (title.current) {
      gsap.from(title.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 1,
        // ease: "elastic.out(1, 0.2)",
      });
    }
    if (para.current) {
      gsap.from(para.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        delay: 1.2,
        // ease: "elastic.out(1, 0.2)",
      });
    }
  });
  return (
    <section
      ref={section1}
      className="w-[100vw] md:h-auto h-[90vh] relative overflow-hidden z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 600, scale: 0.9 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 500, scale: 0.9 }
        }
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-[90%] md:h-full h-[90%] bg-cover bg-center bg-no-repeat transform mx-auto justify-center items-center md:px-10 md:py-20 md:space-y-5
        px-2 pt-5 space-2 rounded-xl"
        style={{ backgroundImage: "url(/images/img_header_1.jpg)" }}
      >-
        <h1
          ref={title}
          className="md:text-7xl text-3xl text-white/85 font-bold bg-clip-text bg-text-gradient md:w-[70%] w-[100%] py-2 font-sarif"
        >
          Premier Solar Energy Solutions by <span className="text-white block md:text-6xl text-3xl">KM Solar Energy</span>
        </h1>
        <p ref={para} className="text-white md:w-[50%] w-[90%] text-lg sm:line-clamp-none line-clamp-[13]">
         {" At KM Solar Energy, we are committed to transforming homes and businesses with our premier solar panel solutions. As an award-winning company, we specialize in delivering customized solar energy systems that cater to the unique needs of our clients, ensuring maximum efficiency and significant cost savings. Our team of experts offers comprehensive services, including consultation, design, installation, and ongoing maintenance, to guarantee seamless integration and optimal performance."}
        </p>
        <div className="flex flex-wrap md:w-[50%] w-[100%] md:gap-5 gap-2 md:py-0 py-3">
          <Link href={whatsappLink}>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 1.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 1,
              }}
              className="bg-[#76f378d7] text-black font-bold p-2 rounded-xl w-[100%] flex justify-center items-center gap-2"
            >
              <span className="text-3xl">
                <FaWhatsapp />
              </span>
              Call us today
            </motion.button>
          </Link>
          <Link href={gmailLink}>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 1,
              }}
              className="bg-[#eeec45d7]  text-black/80 font-bold  p-2 rounded-xl w-[100%] flex justify-center items-center gap-2"
            >
              <span className="text-3xl">
                <IoMdMailOpen />
              </span>
              Drop a mail
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
