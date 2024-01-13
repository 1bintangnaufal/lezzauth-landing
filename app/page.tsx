"use client";
import Image from "next/image";
import { CtaButton, PlayButton } from "./templates/buttons";
import { DecoratedH1, DefaultH2 } from "./templates/typefaces";
import React from "react";
import Showcase from "./templates/showcase";

export default function Home() {
  const [isPlayed, setIsPlayed] = React.useState(false);
  return (
    <main className="min-h-screen px-24 py-16">
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
            src="/video-placeholder.png"
            alt="LezzAuth Showcase/Demo"
            width={1280}
            height={1280}
            className="relative"
          />
          <PlayButton className="absolute bottom-auto top-auto left-auto right-auto" />
        </div>
        <div>
          <Showcase />
        </div>
      </div>
    </main>
  );
}
