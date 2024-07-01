"use client"
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import style from '../scss/navbar.module.scss'; // Adjust path to your SCSS file

const Navbar = () => {
  const titleName = useRef<HTMLHeadingElement>(null);
  const items = useRef<HTMLUListElement>(null);
  const logo = useRef<HTMLImageElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    if (titleName.current) {
      const text: string = titleName.current.innerText;
      const arrayText: string[] = text.split('');
      titleName.current.innerText = '';
      arrayText.forEach((letter: string) => {
        const span = document.createElement('span');
        span.className = 'inline-block';
        if (letter === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = letter;
        }
        titleName.current?.appendChild(span);
      });
    }

    gsap.from('.logo h1 span', {
      y: 40,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      delay: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });

    if (items.current) {
      gsap.from(items.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.6)',
      });
    }

    if (logo.current) {
      gsap.from(logo.current, {
        opacity: 0,
        duration: 2,
        delay: 0.6,
      });
    }
  });

  return (
    <nav id='home' className="py-2.5 rounded backdrop-blur-xl relative">
      <div className="flex flex-wrap justify-between items-center md:mx-auto md:px-20 px-2 text-[#0b251e]">
          <Link 
          href={"/"}
          className="flex items-center logo justify-center md:w-auto w-[80%]">
            <Image
              ref={logo}
              src="/images/soalar_logo.png"
              alt="KM Solar Energy"
              width={100}
              height={100}
              className='w-[20%] h-[20%] md:w-[100%] md:h-[100%]'
              />
            <div className='flex flex-col text-center'>
              <h1 ref={titleName} className="self-center md:text-4xl text-xl font-extrabold whitespace-nowrap font-hibble">
                KM Solar Energy
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
                className='text-sm text-blue-950 font-bold'>
                LET THE SUN PAY YOUR ELECTRICITY BILLS
              </motion.p>
            </div>
          </Link>

        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, ease: "easeIn" ,}}
         className={`${style.menu_btn} block md:hidden`} onClick={toggleMenu}>
          <span className={`${style.menu_btn__burger} ${isMenuOpen? style.open : ''}`}></span>
        </motion.div>
        
        {isMenuOpen ? <motion.div 
        initial={{ opacity: 0 , x: 500}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        className={`w-[100vw] h-[30vh] md:w-[100vw] md:h-[30vh] flex justify-center items-center text-center bg-white/20 backdrop-blur-2xl rounded-3xl md:hidden`}>
          <ul className={`flex flex-col justify-evenly items-center text-center gap-1 sm:gap-2 sm:text-2xl text-xl h-[80%] w-[90%] text-[##0b251e]
            `}>
            <motion.li
            initial={{ opacity: 0 , x: 100}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] , delay:0.4}}
            >
              <Link href={"#home"} passHref>Home</Link>
            </motion.li>
            <motion.li
             initial={{ opacity: 0 , x: 100}}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] , delay:0.7}}
            >
              <Link href={"#ourservices"} passHref>Services</Link>
            </motion.li>
            <motion.li
            initial={{ opacity: 0 , x: 100}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] , delay:1}}
            >
              <Link href={"#whychooseus"} passHref>Why Choose Us</Link>
            </motion.li>
            <motion.li
             initial={{ opacity: 0 , x: 100}}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] , delay:1.2}}
            >
              <Link href={"#about"} passHref>About</Link>
            </motion.li>
            <motion.li
             initial={{ opacity: 0 , x: 100}}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] , delay:1.5}}
            >
              <Link href={"/contact"} passHref>Contact</Link>
            </motion.li>
          </ul>
        </motion.div> : " "}
        

        <div className="hidden w-full md:block md:w-auto">
          <ul ref={items} className="flex flex-row px-2 py-4 text-xl">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-block">
              <Link
                href={"#home"}
                className="inline-block hover:text-yellow-300 transition-all ease-in-out delay-100 rounded-xl hover:bg-white/5 px-3 py-2 hover:drop-shadow-lg">
                Home
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-block">
              <Link
                href={"#ourservices"}
                className="inline-block hover:text-yellow-300 transition-all ease-in-out delay-100 rounded-xl hover:bg-white/5 px-3 py-2 hover:drop-shadow-lg">
                Services
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-block">
              <Link
                href={"#whychooseus"}
                className="inline-block hover:text-yellow-300 transition-all ease-in-out delay-100 rounded-xl hover:bg-white/5 px-3 py-2 hover:drop-shadow-lg">
                Why Choose Us
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-block">
              <Link
                href={"#about"}
                className="inline-block hover:text-yellow-300 transition-all ease-in-out delay-100 rounded-xl hover:bg-white/5 px-3 py-2 hover:drop-shadow-lg">
                About
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-block">
              <Link
                href={"/contact"}
                className="inline-block hover:text-yellow-300 transition-all ease-in-out delay-100 rounded-xl hover:bg-white/5 px-3 py-2 hover:drop-shadow-lg">
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;