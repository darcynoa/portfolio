"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const hero = useRef(null);
  const image = useRef(null);
  const circle = useRef(null);
  const header = useRef(null);
  const blurb = useRef(null);

  useGSAP(
    () => {
      gsap.set(circle.current, {
        y: "85%",
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      });

      gsap.set(image.current, {
        clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      gsap.set([header.current, blurb.current], {
        opacity: 0,
        y: "7rem",
      });

      gsap
        .timeline()
        .to(circle.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          y: 0,
          delay: 0.2,
          duration: 4,
        })
        .to(image.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          delay: 0.2,
          ease: "expo.in",
        })
        .to(header.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(blurb.current, {
          y: 0,
          opacity: 1,
          delay: -0.8,
          duration: 1,
          ease: "power1.inOut",
        });
    },
    { scope: hero },
  );

  return (
    <section ref={hero}>
      <div className="relative ml-[0%] flex flex-col items-center justify-center pt-[5rem] md:pt-[0rem] 2xl:ml-[25%]">
        <div
          ref={circle}
          className="bg-accent absolute right-[5%] bottom-[1%] -z-10 aspect-square w-[84%] rounded-full md:right-[15%] md:w-[70%] lg:right-[27%] lg:w-[44%]"
        ></div>
        <Image
          ref={image}
          src="/homepage/hero-image-circle-background.png"
          alt="The hero image of my portfolio"
          width={673}
          height={820}
          className="z-10 w-[90%] md:w-[70%] lg:w-[47%]"
        />
      </div>
      <div className="relative z-10 -mt-[4rem] flex flex-col gap-[4rem] pl-[2rem] md:-mt-[14rem] md:gap-[8rem] lg:pl-[15rem] 2xl:-mt-[20rem]">
        <h1
          ref={header}
          className="font-sans text-[3rem] leading-tight font-bold tracking-[1.5px] uppercase md:text-[7rem]"
        >
          Dope web experiences
        </h1>
        <p
          ref={blurb}
          className="w-[80%] translate-y-28 font-sans text-[1rem] leading-tight tracking-[1.5px] md:w-[60%] md:text-[1.2rem] lg:w-[40%]"
        >
          It&apos;s my passion to create smooth and visually appealing web
          experiences, check some of them out below!
        </p>
      </div>
    </section>
  );
}
