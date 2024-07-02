"use client"
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdMailOpen } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";

const Footer = () => {
  const contactNumber:string = process.env.NEXT_PUBLIC_CONTACT_NUMBER!;
  const address = process.env.NEXT_PUBLIC_ADDRESS!;
  const email:string = process.env.NEXT_PUBLIC_GMAIL!;
  console.log(process.env.GMAIL!)
  const subject = "Inquiry about services"; 
  const body = "Hello, I'm interested in your services."; 

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const gmailLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <footer className="flex flex-col w-[100%] md:h-auto h-auto mt-20 ">
      <div className="flex md:flex-row flex-col w-[100%] md:h-[80%] h-auto bg-black text-white justify-center md:justify-evenly items-start md:py-10 md:pl-24 py-4 px-4">
        <div className="flex flex-col justify-start items-start  md:w-[30%] w-[100%] md:text-start text-center">
          <div className="flex text-3xl font-bold text-start justify-center items-start">
          <Link  href={"/"} className="flex items-center logo justify-center">
          <Image
            src="/images/soalar_logo.png"
            alt="KM Solar Energy"
            width={50}
            height={50}
          />
          <div className='flex flex-col text-start'>
          <h1 className="self-center text-xl font-extrabold whitespace-nowrap text-start  font-hibble">
            {"KM Solar Energy"}
          </h1>
          <motion.p 
          initial={{ opacity: 0  , y: 20}}
          animate={{ opacity: 1 , y: 0}}
          transition={{ duration: 1, delay: 1  , ease: [0.34, 1.56, 0.64, 1]}}
          className='text-sm text-yellow-700 font-bold'>LET THE SUN PAY YOUR ELECTRICITY BILLS</motion.p>
          </div>
        </Link>
          </div>
          <p className="py-2 md:w-[60%] w-[100%]">
            Welcome to KM Solar Energy Ltd. your certified provider for
            sustainable energy solutions.
          </p>
          <div className="flex flex-wrap md:max-w-[80%] w-[100%] justify-start items-start md:space-y-1 space-y-2">
            <motion.span 
            whileHover={{scale : 1.2 , color: "rgb(250 204 21)"}}
            transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1]}}
            className="font-hibble block w-[100%] pb-2 text-xl text-yellow-400">Services Area</motion.span>
            <span className="w-[30%] hover:text-yellow-400"> Uttar Pradesh</span>
            <span className="w-[30%] hover:text-yellow-400"> Delhi</span>
            <span className="w-[30%] hover:text-yellow-400"> Maharastra</span>
            <span className="w-[30%] hover:text-yellow-400"> Uttrakhand</span>
            <span className="w-[30%] hover:text-yellow-400"> Bihar</span>
            <span className="w-[30%] hover:text-yellow-400"> Rajasthan</span>
          </div>
        </div>
        <div className="md:w-[20%] flex flex-col justify-start items-start md:px-2 md:py-0 py-4">
        <motion.h1 
        whileHover={{scale : 1.2 , color: "rgb(250 204 21)"}}
        transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1]}}
        className="text-2xl md:text-white font-bold  py-1 font-sarif text-yellow-400">Quick Links</motion.h1>
          <div className="flex flex-col justify-start items-start">
            <Link href={"#home"} className="w-[100%]  p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out">
              Home
            </Link>
            <Link href={"#about"} className="w-[100%] p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out">
              About
            </Link>
            <Link href={"#ourservices"} className="w-[100%] p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out">
              Services
            </Link>
            <Link href={"#whychooseus"} className="w-[100%] p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out">
              Why choose us
            </Link>
            <Link href={"/contact"} className="w-[100%] p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out">
              Contact
            </Link>
          </div>
        </div>
        <div className="md:w-[20%]  flex flex-col justify-start items-start">
          <motion.h1 
        whileHover={{scale : 1.2 , color: "rgb(250 204 21)"}}
        transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1]}}
        className="text-2xl md:text-white font-bold  py-1 font-sarif text-yellow-400">Contact Us</motion.h1>
          <p className="p-1 hover:text-yellow-400 transition-all delay-100 w-[90%] ease-in-out flex justify-center items-center gap-2">
            <span className="text-2xl">
            <RiHomeOfficeFill/>
            </span>
            {address}</p>
          <Link href={contactNumber}
          className="p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out flex justify-center items-center gap-2"
          >
              <span className="text-2xl">
                <IoCallOutline />
              </span>
              {contactNumber}
          </Link>
          <Link href={gmailLink}
          className="p-1 hover:text-yellow-400 transition-all delay-100 ease-in-out flex justify-center items-center gap-2"
          >
              <span className="text-2xl">
                <IoMdMailOpen />
              </span>
              {email}
          </Link>
        </div>
        <div className="md:w-[20%] flex flex-col justify-start items-start">
        <motion.h1 
        whileHover={{scale : 1.2 , color: "rgb(250 204 21)"}}
        transition={{duration: 0.5 , ease : [0.34, 1.56, 0.64, 1]}}
        className="text-2xl md:text-white font-bold  py-1 font-sarif text-yellow-400">Follow Us</motion.h1>
          <p>Follow us on social media</p>
          <div className="flex gap-2 text-3xl py-2">
            <Link href="https://www.facebook.com/share/w7fLqrz4hrwHPff7/?mibextid=qi2Omg">
            <span className="hover:text-yellow-400 transition-all delay-100 ease-in-out">
              <FaFacebookF />
            </span>
            </Link>
            <Link href="https://www.instagram.com/">
            <span className="hover:text-yellow-400 transition-all delay-100 ease-in-out">
              <FaXTwitter />
            </span>
            </Link>
            <Link href="https://www.instagram.com/">
            <span className="hover:text-yellow-400 transition-all delay-100 ease-in-out">
              <FaInstagram />
            </span>
            </Link>
            <Link href="https://www.instagram.com/">
            <span className="hover:text-yellow-400 transition-all delay-100 ease-in-out">
              <FaLinkedinIn />
            </span>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-1 md:py-0 py-2 items-center bg-[#272727] md:h-[20%] h-auto text-white md:px-20 px-2">
        <div className="md:text-center text-start flex gap-2">
            <Link href={"/terms-and-conditions"} className=" hover:text-yellow-400">Terms of Service | Privacy Policy</Link> 
        </div>
        <p className="text-center">© 2024 KM Solar Energy. All rights reserved.</p>
        <Link
          href={"/"}
          className="text-start hover:text-yellow-400 "
          >
            <p className="text-center">Powered by KM Solar</p>
          </Link>
          <Link
          href={"https://www.linkedin.com/in/master-utsav"}
          className="text-start hover:text-yellow-400 flex gap-2"
          >
          <p className="">Website by :{" "}</p>
            master_utsav
          </Link>
      </div>
    </footer>
  );
};

export default Footer;
