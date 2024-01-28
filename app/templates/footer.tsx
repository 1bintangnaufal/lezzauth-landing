"use client";
import React from "react";
import { GhostButton } from "./buttons";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  // const [isScrollable, setIsScrollable] = React.useState(false);
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollable =
  //       document.documentElement.scrollHeight > window.innerHeight;
  //     setIsScrollable(scrollable);
  //   };
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const positionClass =
  //   `${!isScrollable ? "absolute bottom-0 w-full" : "static"} bg-lezzaccent flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 sm:justify-between place-items-center px-16 py-4`;
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-lezzaccent flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 sm:justify-between place-items-center px-16 py-4">
      <div>
        <text className="leading-[0px] text-sm">
          Copyright &copy;{currentYear} lezzauth.com
        </text>
      </div>
      <div className="flex gap-2">
        <GhostButton onClick={() => router.push("/book_a_demo")}>
          Book a Demo
        </GhostButton>
        <GhostButton>Sign in</GhostButton>
      </div>
    </div>
  );
}
