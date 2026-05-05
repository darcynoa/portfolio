"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Delay = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useGSAP(() => {
    gsap.set(".test", {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.to(".test", {
      visibility: "visible",
      opacity: 1,
      delay: 7,
    });
  });

  const delay = useRef(null);
  return (
    <div ref={delay} className="test">
      {children}
    </div>
  );
};

export default Delay;
