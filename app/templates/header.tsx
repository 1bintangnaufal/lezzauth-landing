"use client";
import Image from "next/image";
import {
  PrimaryButton,
  GhostButton,
  CustomIconButton,
  XButton,
} from "./buttons";
import brand from "@/public/lezzform-logo.svg";
import { RiFingerprintFill } from "react-icons/ri";
import React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const isOpen = () => setOpen(!open);
  React.useEffect(() => {
    const body = document.body;
    if (open === true) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div className="sticky top-0 z-50 bg-lezzbg flex justify-between place-items-center border-b border-solid border-b-lezzborder px-6 sm:px-16 py-4 sm:py-3">
        <div>
          <Image
            src={brand}
            alt="Lezzauth Logo"
            width={100}
            height={100}
            className="h-auto sm:h-auto size-32 sm:size-48"
          />
        </div>
        <div className="flex sm:gap-2">
          <PrimaryButton className="hidden sm:block">Book a Demo</PrimaryButton>
          <GhostButton className="hidden sm:block">Sign in</GhostButton>
          <div onClick={isOpen}>
            <CustomIconButton className="block sm:hidden">
              <RiFingerprintFill />
            </CustomIconButton>
          </div>
        </div>
      </div>
      {open && (
        <div className="py-10 flex flex-col gap-10 place-items-center w-screen h-screen fixed top-0 z-[100] bg-lezzbg opacity-95 animate-in slide-in-from-right-full">
          <div className="flex justify-between place-items-center w-full px-6">
            <Image
              src={brand}
              alt="Lezzauth Logo"
              width={100}
              height={100}
              className="h-auto size-32"
            />
            <div onClick={isOpen}>
              <XButton />
            </div>
          </div>
          <div className="flex flex-col gap-3 place-items-center">
            <PrimaryButton>Book a Demo</PrimaryButton>
            <GhostButton>Sign in</GhostButton>
          </div>
        </div>
      )}
    </>
  );
}
