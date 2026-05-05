"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  uid: string;
}

const japaneseCharacters: { [key: number]: string } = {
  1: "\u4E00",
  2: "\u4E8C",
  3: "\u4E09",
};

const data: {
  [key in string]: {
    image: string;
    title: string;
    blurb: string;
    href: string;
  };
} = {
  lanoire: {
    image: "/homepage/lanoire-work.png",
    title: "L.A. Noire Speedrunning",
    blurb: "The unlikely project that got me hired twice",
    href: "https://lanoirespeedrunning.com",
  },
  pcas: {
    image: "/homepage/pcas-work.jpg",
    title: "Auto collision avoidance",
    blurb: "yeah this shit is totally dope",
    href: "http://plantbasedconeys.com",
  },
  portfolio: {
    image: "/homepage/portfolio-work.jpg",
    title: "Waait. . . . . is this Meta?",
    blurb: "yes this is a case study about my portfolio",
    href: "http://atthehelmproductions.com",
  },
};

const WorkItem = ({ uid }: Props) => {
  const item = data[uid];
  const index = Object.keys(data).findIndex((e) => e === uid);
  const workItemRef = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const header = useRef<HTMLHeadingElement>(null);
  const blurb = useRef<HTMLParagraphElement>(null);
  const marker = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.set(workItemRef.current, {
  //       clipPath: "circle(0% at 50% 100%)",
  //     });

  //     gsap.set([header.current, blurb.current], {
  //       opacity: 0,
  //       y: "7rem",
  //     });
  //     gsap
  //       .timeline()
  //       .to(workItemRef.current, {
  //         scrollTrigger: {
  //           trigger: workItemRef.current,
  //           scrub: 1.5,
  //           start: "top top",
  //           end: "bottom+=500 top",
  //           pin: true,
  //         },
  //         clipPath: "circle(100% at 50% 100%)",
  //         duration: 4,
  //         ease: "power2.in",
  //       })
  //       .to(header.current, {
  //         scrollTrigger: {
  //           trigger: workItemRef.current,
  //           scrub: 3,
  //           start: "top top",
  //           end: () => `+=${workItemRef.current?.offsetHeight ?? 0}+=50vh`,
  //         },
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power1.inOut",
  //       })
  //       .to(blurb.current, {
  //         y: 0,
  //         opacity: 1,
  //         delay: -0.8,
  //         duration: 1,
  //         ease: "power1.inOut",
  //       });
  //   },
  //   { scope: workItemRef },
  // );

  return (
    <div className="relative">
      <div
        ref={marker}
        className="bg-accent absolute top-[50%] left-[50%] -z-50 aspect-square w-[4rem] rounded-full"
      >
        <div className="pt-[0.8rem] pl-[1.25rem] font-sans text-[1.5rem]">
          {japaneseCharacters[index + 1]}
        </div>
      </div>
      <div
        ref={workItemRef}
        className={`-z-10 pt-[4rem] leading-[1]`}
        onMouseOver={() => {
          gsap.to(image.current, {
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut",
          });
        }}
        onMouseLeave={() => {
          gsap.to(image.current, {
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut",
          });
        }}
      >
        <Image
          ref={image}
          className="mx-auto h-[70vh] w-[63vw] rounded-[4rem] object-cover hover:cursor-pointer"
          src={item.image}
          alt={`${item.title} image`}
          width={1920}
          height={1080}
        />

        <h1
          ref={header}
          className="-mt-[10%] ml-[10vw] w-[60%] text-[3rem] leading-[1.2] font-bold uppercase hover:cursor-pointer md:text-[7rem]"
        >
          {item.title}
        </h1>
        <p
          ref={blurb}
          className="mt-2 ml-[10vw] w-fit text-[1.2rem] tracking-[1.5px] lowercase"
        >
          {item.blurb}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
