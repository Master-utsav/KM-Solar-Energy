"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

interface CardProps {
  srcLink: string;
  text: string;
  title: string;
  pruductLink?: string
}

export function KitCard({ srcLink, text, title , pruductLink}: CardProps) {
  return (
    <CardContainer className="inter-var md:w-[30vw] md:h-[70vh] w-[100vw] h-[60vh] md:my-10 ">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black/35 dark:border-white/[0.2] border-black/[0.1] w-[80%] h-[100%] rounded-xl md:p-6 p-3 border">
        <CardItem translateZ="100" className="w-[100%] h-[50%] md:mt-2">
          <div
            className={`w-[100%] h-[100%] object-cover rounded-xl group-hover/card:shadow-xl bg-cover bg-center bg-no-repeat`}
            style={{
              backgroundImage: `url(${srcLink})`,
            }}
          />
        </CardItem>
        <CardItem className="md:py-2 py-5 flex flex-col justify-center items-start text-start">
          <motion.h1
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-4xl text-yellow-400 font-bold w-[100%] text-start py-1 font-sarif"
          >
            {title}
          </motion.h1>
          <p className="w-[100%] text-start text-white line-clamp-4 py-1">
            {text}
          </p>
          <Link
            href={pruductLink? pruductLink : "#"}
            className="text-blue-100 text-lg text-start py-2 font-rubik rounded-xl hover:text-blue-300 flex justify-center items-center gap-4"
          >
            View Products
            <FaArrowRightLong/>
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
