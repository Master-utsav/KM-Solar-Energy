"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMailOpen} from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const About = () => {
  const section7 = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER!;
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;
  const message = "Hello, I'm interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const email = process.env.NEXT_PUBLIC_GMAIL!;
  const subject = "Inquiry about services";
  const body = "Hello, I'm interested in your services.";
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const gmailLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: [0.02],
      }
    );

    if (section7.current) {
      observer.observe(section7.current);
    }

    return () => {
      if (section7.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(section7.current);
      }
    };
  }, [inView]);

  return (
    <section
      id="about"
      ref={section7}
      className="md:px-4 px-2 py-4 md:py-10 bg-white/20 rounded-lg md:shadow-md md:my-20 md:w-[80%] w-[90%] my-10 mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className="mx-auto md:p-4"
      >
        <h2 className="md:text-3xl text-xl font-bold text-gray-800 md:mb-4 mb-2 text-center font-rubik">
          <span className="text-yellow-700">About {" "}</span> KM Solar Energy
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="md:text-lg text-sm text-gray-700 leading-relaxed md:pb-4 pb-2 text-center md:w-[70%] w-[100%] mx-auto font-hibble"
        >
          KM Solar Energy is a leading provider of solar energy solutions in the
          Madhya Pradesh region, committed to transforming how homes and
          businesses harness clean, renewable power.
        </motion.p>
        <div className="flex flex-col gap-2 bg-neutral-300/20 md:w-[90%] w-[95%] mx-auto md:p-5 p-2 rounded-xl drop-shadow-md">
        <motion.p 
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 1, delay: 0.4, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg text-black leading-relaxed pb-4 w-[100%] text-start md:pr-20 pr-4">
          {
            "Our mission is to become a formidable player in Solar installation, operation and maintenance industry and to promote & commercialize the use of Solar power to the remotest areas of India."
          }
        </motion.p>
        <motion.p 
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 1, delay: 0.8, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg text-gray-700 leading-relaxed pb-4 w-[100%] text-start md:pl-20 pl-4">
          {
            "We also offer O&M (Operation & Maintenance) and AMC (Annual Maintenance Contract) solutions for already installed Solar power plants. Our scope of work includes Design, Procurement, Installation & Commissioning of Solar power plant and handing over of a project to the customer."
          }
        </motion.p>
        <motion.p 
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 1, delay: 1.2, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg text-black leading-relaxed pb-4 w-[100%] text-start md:pr-20 pr-4">
          {
            "Furthermore, our aim is to encourage the use of Green electricity for household and commercial consumption by promoting the installation of Independent Solar Solutions to contribute towards Greener & Cleaner environment."
          }
        </motion.p>
        <motion.p 
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 1, delay: 1.6, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg text-gray-700 leading-relaxed pb-4 w-[100%] text-start md:pl-20 pl-4">
          {
            "We are committed to provide the highest level of customer satisfaction by delivering reliable and robust highest quality solutions and after sales support at very Competitive price."
          }
        </motion.p>
        <motion.p 
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 1, delay: 2.0, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg text-black leading-relaxed pb-4 w-[100%] text-start md:pr-20 pr-4">
          {
            "With years of expertise in the industry, we offer a comprehensive range of services including consultation, design, installation, and ongoing maintenance of solar panel systems. Our solutions are tailored to meet the unique energy needs of each customer, ensuring optimal performance and cost efficiency."
          }
        </motion.p>
        <motion.p 
         initial={{ opacity: 0, x: 80 }}
         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
         transition={{ duration: 1, delay: 2.4, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg  text-gray-700 leading-relaxed pb-4 w-[100%] text-start md:pl-20 pl-4">
          {
            "Our team of certified professionals ensures seamless integration of solar technology, backed by superior craftsmanship and reliable customer support. We prioritize transparency and collaboration, guiding our clients through every step of the process—from initial assessment and permitting to final inspection and activation."
          }
        </motion.p>
        <motion.p 
         initial={{ opacity: 0, x: -80 }}
         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
         transition={{ duration: 1, delay: 2.8, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg  text-black leading-relaxed pb-4 w-[100%] text-start md:pr-20 pr-4">
          {
            "Whether you're looking to reduce your carbon footprint, lower energy bills, or achieve energy independence, KM Solar Energy is here to empower you with sustainable solutions."
          }
        </motion.p>
        <motion.p
         initial={{ opacity: 0, x: -80 }}
         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
         transition={{ duration: 1, delay: 3.2, ease : [0.34, 1.56, 0.64, 1] }}
         className="text-lg  text-gray-700 leading-relaxed pb-4 w-[100%] text-start md:pl-20 pl-4">
          {
            "Beyond installations, we are passionate about educating our community on the benefits of solar energy and sustainable living practices. Through workshops, educational materials, and ongoing support, we empower our customers to make informed decisions about their energy future."
          }
        </motion.p>
        <motion.p 
         initial={{ opacity: 0, y: 80 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
         transition={{ duration: 1, delay: 3.6, ease : [0.34, 1.56, 0.64, 1] }}
        className="text-lg text-gray-800 leading-relaxed pb-4 w-[100%] text-start md:pr-10 pr-2">
          {
            "Join us in embracing a cleaner, greener tomorrow with KM Solar Energy."
          }
        </motion.p>
        <div className="flex md:flex-row flex-col md:justify-between items-center md:px-20 px-2 md:gap-0 gap-4">
          <Link href={contactNumber}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 1 }}
              className="bg-[#eeec45d7] text-black font-bold p-2 rounded-xl w-[100%] flex justify-center items-center gap-2"
            >
              <IoCallOutline />
              Call me
            </motion.button>
          </Link>
          <Link href={whatsappLink}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1], delay: 1 }}
              className="bg-[#76f378d7] text-black font-bold p-2 rounded-xl w-[100%] flex justify-center items-center gap-2"
            >
              <FaWhatsapp />
              Call us today
            </motion.button>
          </Link>
          <Link href={gmailLink}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 1 }}
              className="bg-[#eeec45d7] text-black/80 font-bold p-2 rounded-xl w-[100%] flex justify-center items-center gap-2"
            >
              <IoMdMailOpen />
              Drop a mail
            </motion.button>
          </Link>
        </div>
        </div>   
      </motion.div>
    </section>
  );
};

export default About;
