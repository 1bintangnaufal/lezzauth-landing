"use client";
import Image from "next/image";
import { CtaButton } from "./template/buttons";
import { DecoratedH1, DefaultH2 } from "./template/typefaces";
import React from "react";

export default function Home() {
  const [isPlayed, setIsPlayed] = React.useState(false);
  const featureShowcase: string = "signIn";
  switch (featureShowcase) {
    case "signIn":
      console.log("signIn"); //change to assets
      break;
    case "signUp":
      console.log("signUp");
      break;
    case "userButton":
      console.log("userButton");
      break;
    case "userProfile":
      console.log("userProfile");
      break;
  }

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
        <div className="flex place-content-center">
          <Image
            src="/video-placeholder.png"
            alt="LezzAuth Showcase/Demo"
            width={1280}
            height={1280}
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <p>Auth & User Management</p>
              <p>with just</p>
              <p>
                One Line <span>of Code</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 place-items-start">
              <button>SignIn</button>
              <button>SignUp</button>
              <button>UserButton</button>
              <button>UserProfile</button>
            </div>
          </div>
          <div className="flex place-self-center">
            <p>affh iyyh?</p>
          </div>
        </div>
      </div>
    </main>
  );
}
