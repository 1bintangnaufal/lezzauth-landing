"use client";
import Image from "next/image";
import { CtaButton, PlayButton } from "./templates/buttons";
import { DecoratedH1, DefaultH2, DefaultH3 } from "./templates/typefaces";
import React from "react";
import Showcase from "./templates/showcase";
import A_placeholder from "@/public/video-placeholder.png";
import B_react from "@/public/react-logo.svg";
import B_next from "@/public/next-logo.svg";
import B_native from "@/public/react-native-logo.png";

export default function Home() {
  const [isPlayed, setIsPlayed] = React.useState(false);
  return (
    <main className="min-h-screen px-24 pt-16 pb-32">
      <div className="grid grid-cols-1 gap-32">
        <div className="flex flex-col gap-7 place-items-center">
          <DecoratedH1 className="text-center">
            Not just authentication.
          </DecoratedH1>
          <DefaultH2 className="text-center max-w-6xl">
            Build Complete User Management natively for React and React Native.
          </DefaultH2>
          <p className="text-center text-lg max-w-2xl">
            LezzAuth is not just a &quot;sign-in box&quot;. Build your auth and
            user management, that generate natively into React, NextJs, an React
            Native!
          </p>
          <CtaButton>Book a Demo</CtaButton>
        </div>
        <div className="flex place-items-center place-content-center">
          <Image
            src={A_placeholder}
            alt="LezzAuth Showcase/Demo"
            className="relative"
          />
          <PlayButton className="absolute" />
        </div>
        <div className="flex place-items-center place-content-center">
          <Showcase />
        </div>
        <div className="flex place-items-center place-content-center">
          <div className="flex flex-col place-items-center gap-10">
            <DefaultH3 className="max-w-xl text-center">
              Build natively for your favorite frontend stack
            </DefaultH3>
            <div className="flex gap-10">
              <Image src={B_react} alt="Brand: React" width={75} height={75} />
              <Image src={B_next} alt="Brand: NextJs" width={75} height={75} />
              <Image
                src={B_native}
                alt="Brand: React Native"
                width={75}
                height={75}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
