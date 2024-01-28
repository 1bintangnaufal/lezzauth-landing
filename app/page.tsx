"use client";
import Image from "next/image";
import { CtaButton, PlayButton, XButton } from "./templates/buttons";
import { DecoratedH1, DefaultH2, DefaultH3 } from "./templates/typefaces";
import React from "react";
import Showcase from "./templates/showcase";
import A_placeholder from "@/public/video-placeholder.png";
import B_react from "@/public/react-logo.svg";
import B_next from "@/public/next-logo.svg";
import B_native from "@/public/react-native-logo.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [play, setPlay] = React.useState(false);
  const handlePlay = () => setPlay(true);
  const handleClose = () => setPlay(false);

  React.useEffect(() => {
    const body = document.body;
    if (play) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [play]);

  return (
    <main className="min-h-screen px-6 sm:px-24 pt-16 pb-32">
      <div className="grid grid-cols-1 gap-32">
        <div className="flex flex-col gap-7 place-items-center">
          <DecoratedH1 className="text-center">
            Not just authentication.
          </DecoratedH1>
          <DefaultH2 className="text-center sm:max-w-6xl">
            Build Complete User Management natively for React and React Native.
          </DefaultH2>
          <p className="text-center text-lg sm:max-w-2xl">
            LezzAuth is not just a &quot;sign-in box&quot;. Build your auth and
            user management, that generate natively into React, NextJs, an React
            Native!
          </p>
          <CtaButton onClick={() => router.push("/book_a_demo")}>
            Book a Demo
          </CtaButton>
        </div>
        <div className="flex place-items-center place-content-center">
          <Image
            src={A_placeholder}
            alt="LezzAuth Showcase/Demo"
            className="relative"
          />
          <PlayButton className="absolute" onClick={handlePlay} />
          {play && (
            <div
              className="fixed z-[100] top-0 left-0 w-screen h-screen flex place-items-center place-content-center bg-lezzbg bg-opacity-95"
              onClick={handleClose}
            >
              <div className="relative w-fit h-5/6">
                <div
                  className="absolute top-[-10px] right-[-10px]"
                  onClick={handleClose}
                >
                  <XButton />
                </div>
                <iframe
                  className="rounded-2xl w-full h-full aspect-video"
                  src="https://www.youtube.com/embed/1YO5158pG4I?si=YlrV5lGzvlJuqASf&autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onClick={(e) => e.stopPropagation()} // Prevent closing on iframe click
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex place-items-center place-content-center">
          <Showcase />
        </div>
        <div className="flex place-items-center place-content-center">
          <div className="flex flex-col place-items-center gap-10">
            <DefaultH3 className="max-w-xl text-center">
              Build natively for your favorite frontend stack
            </DefaultH3>
            <div className="flex align-items-center justify-center gap-10 sm:gap-20">
              <Image
                src={B_react}
                alt="Brand: React"
                width={75}
                height={75}
                className="size-16 sm:size-24"
              />
              <Image
                src={B_next}
                alt="Brand: NextJs"
                width={75}
                height={75}
                className="size-16 sm:size-24"
              />
              <Image
                src={B_native}
                alt="Brand: React Native"
                width={75}
                height={75}
                className="object-contain size-16 sm:size-24"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
