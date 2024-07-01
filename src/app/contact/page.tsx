/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { motion } from "framer-motion";
import {z , ZodType} from "zod"
import { useForm , SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Message{
  email: string;
  message : string;
}
  
export const schema: ZodType<Message> = z
.object({
  email: z.string().min(1, "email is required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email format"),
  message: z.string().min(1, "message is required"),
})

const Contact = () => {
  const [assistState, setAssistSatate] = React.useState<boolean>(false);
  const titleName = React.useRef<HTMLHeadingElement>(null);
  const router = useRouter()
  
  useGSAP(() => {
    if (titleName.current) {
      const text: string = titleName.current.innerText;
      const arrayText: string[] = text.split("");
      titleName.current.innerText = "";
      arrayText.forEach((letter: string) => {
        const span = document.createElement("span");
        span.className = "inline-block";
        if (letter === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = letter;
        }
    
        titleName.current?.appendChild(span);
      });
    }
      gsap.from(`.title h1 span`, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: 1,
        ease: "elastic.out(1, 0.4)",
    });
  })


  const {register , handleSubmit , formState: {errors} , reset } = useForm<Message>({
    resolver: zodResolver(schema),
    mode: "all",
  })

  const submit : SubmitHandler<Message> = async(data : Message) => {
    if(data){
       toast.success("Email send successfully")
       reset();
       router.push("/")

    }
  }

  return (
    <div
      
      className="min-h-screen h-auto md:py-12 md:pt-12 relative overflow-x-hidden py-4"
    >
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full " />
      <motion.div 
      initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        ease: "easeIn",
        delay: 0.5,
      }}
      className="max-w-2xl mx-auto p-4 relative space-y-4 title">
        <h1 ref={titleName} className="text-2xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <motion.p 
         initial={{opacity: 0 , y: -100}}
         animate={{opacity: 1 , y: 0}}
         transition={{duration: 1, ease: [0.34, 1.56, 0.64, 1] , delay:1.5}}
        className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          {
            "We're here to help with any questions about our solar installations, products, or services. Whether you're looking to enhance your energy efficiency or need more information about our offerings, we're just a message away."
          }
        </motion.p>
        <div className="flex flex-col text-start items-center justify-start w-fit h-auto">
          <p
            className="text-blue-200 hover:text-blue-500 md:text-lg text-base cursor-pointer text-start"
            onClick={() => setAssistSatate(!assistState)}
          >
            Need assistance ?
          </p>
          {assistState ? (
            <motion.ul 
            initial={{opacity: 0 , x: -100}}
            animate={{opacity: 1 , x: 0}}
            transition={{duration: 0.5, ease: [0.34, 1.56, 0.64, 1]}}
            className="flex flex-col gap-2 mt-2 animate-slidein">
              <li className="text-start mr-2 flex w-[100%]">
                <span className="text-bold text-white md:text-base text-sm w-[30%]">
                  Installation Inquiries:{" "}
                </span>
                <p className="text-white/80 md:text-base text-sm w-[70%] text-start">
                  {
                    "Have questions about our solar panel installations? Need help finding the right system for your home or business? Let us know!"
                  }
                </p>
              </li>
              <li className="text-start mr-2 flex w-[100%]">
                <span className="text-bold text-white md:text-base text-sm w-[30%]">
                  Product Information:{" "}
                </span>
                <p className="text-white/80 md:text-base text-sm w-[70%] text-start">
                  {
                    "Want more details about our high-quality solar products? We're happy to provide all the information you need."
                  }
                </p>
              </li>
              <li className="text-start mr-2 flex w-[100%]">
                <span className="text-bold text-white md:text-base text-sm w-[30%]">
                  Maintenance Services:{" "}
                </span>
                <p className="text-white/80 md:text-base text-sm w-[70%] text-start">
                  {
                    "Interested in our maintenance services? We'll keep you updated on schedules, costs, and how to ensure your system runs smoothly."
                  }
                </p>
              </li>
              <li className="text-start mr-2 flex w-[100%]">
                <span className="text-bold text-white md:text-base text-sm w-[30%]">
                  Technical Support:{" "}
                </span>
                <p className="text-white/80 md:text-base text-sm w-[70%] text-start">
                  {
                    "Facing any issues with your solar panel system? We're here to troubleshoot and ensure you have a seamless experience."
                  }
                </p>
              </li>
              <li className="text-start mr-2 flex  w-[100%]">
                <span className="text-bold text-white md:text-base text-sm w-[30%]">
                  General Questions:{" "}
                </span>
                <p className="text-white/80 md:text-base text-sm w-[70%] text-start">
                  {
                    "Anything else on your mind? Feel free to ask, and we'll do our best to assist."
                  }
                </p>
              </li>
            </motion.ul>
          ) : (
            ""
          )}
        </div>
        <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-[#75f7bde4] to-neutral-50 md:text-lg  text-base text-start">
          Feel free to share your thoughts, requirements, and any suggestions
          you have to help us improve our services!
        </p>
        <form onSubmit={handleSubmit(submit)} className="space-y-4 mt-4 text-white">
        <div className="mb-3 relative">
          <input
            {...register("email")}
            placeholder="Your email address"
            className="rounded-lg border  border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          />
          {errors.email && <p className="text-[12px] text-red-600 absolute -bottom-4 right-1">{errors.email?.message}</p>}
          </div>
          <div className="mb-3 relative">
          <textarea
            {...register("message")}
            placeholder="Your message"
            className="rounded-lg border  border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
          ></textarea>
          {errors.message && <p className="text-[12px] text-red-600 absolute -bottom-2 right-1">{errors.message?.message}</p>}
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
            <Link
              href={"/"}
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              back to home
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
