"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  srcLink: string;
  text: string;
}

export function Card({ srcLink, text }: CardProps) {
  return (
    <CardContainer className="inter-var md:w-[30vw] md:h-[50vh] w-[100vw] h-[50vh]">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black/35 dark:border-white/[0.2] border-black/[0.1] w-[80%] h-[100%] rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-[100%] h-[70%] mt-4">
          <div
            className={`w-[100%] h-[100%] object-cover rounded-xl group-hover/card:shadow-xl bg-cover bg-center bg-no-repeat`}
            style={{
              backgroundImage: `url(${srcLink})`,
            }}
          />
        </CardItem>
        <CardItem className="py-5 mx-auto">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" text-white text-xl  font-rubik p-2 rounded-xl"
          >
            {text}
          </motion.button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
