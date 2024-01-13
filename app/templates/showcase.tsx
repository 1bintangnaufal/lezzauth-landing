import React, { useState } from "react";
import { DecoratedH3, DefaultH3 } from "./typefaces";
import Image from "next/image";
import { PrimaryButton } from "./buttons";
import A_sectionSupport from "@/public/feat-section-support.png";
import A_signIn from "@/public/feat-sign-in.png"
import A_signUp from "@/public/feat-sign-up.png"

export default function Showcase() {
  const signInText = "<SignIn/>";
  const signUpText = "<SignUp/>";
  const userButtonText = "<UserButton/>";
  const userProfileText = "<UserProfile/>";
  type Tabs = 1 | 2 | 3 | 4;
  const [activeTab, setActiveTab] = useState<Tabs>(1);
  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(Number(event.target.value) as Tabs);
  };
  return (
    <div className="grid grid-cols-2 gap-24">
      <div className="flex flex-col gap-6">
        <div>
          <DecoratedH3>Auth & User Management</DecoratedH3>
          <DefaultH3>with just</DefaultH3>
          <div className="flex place-items-baseline gap-2">
            <DecoratedH3>One Line</DecoratedH3>
            <DefaultH3>of Code</DefaultH3>
          </div>
        </div>
        <div className="flex flex-col gap-2 place-items-start">
          <div className="relative group">
            <input
              type="radio"
              id="featureA"
              value={1}
              checked={activeTab === 1}
              onChange={handleTabChange}
              name="showcaseTab"
              className="peer hidden"
              defaultChecked
            />
            <label
              htmlFor="featureA"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureA"
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {signInText}
            </label>
          </div>
          <div className="relative group">
            <input
              type="radio"
              id="featureB"
              value={2}
              checked={activeTab === 2}
              onChange={handleTabChange}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureB"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureB"
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {signUpText}
            </label>
          </div>
          <div className="relative group">
            <input
              type="radio"
              id="featureC"
              value={3}
              checked={activeTab === 3}
              onChange={handleTabChange}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureC"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureC"
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {userButtonText}
            </label>
          </div>
          <div className="relative group">
            <input
              type="radio"
              id="featureD"
              value={4}
              checked={activeTab === 4}
              onChange={handleTabChange}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureD"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureD"
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {userProfileText}
            </label>
          </div>
        </div>
      </div>
      <div className="flex place-items-center place-content-center relative">
        <Image
          src={A_sectionSupport}
          alt="Common Graphics"
          className="absolute"
          objectFit="cover"
          objectPosition="top left"
        />
        <PrimaryButton className="absolute left-0 bottom-0">
          View Code
        </PrimaryButton>
        {activeTab === 1 && (
          <Image
            src={A_signIn}
            alt="Sign In Feature"
            width={320}
            height={320}
            className="absolute"
          />
        )}
        {activeTab === 2 && (
          <Image
            src={A_signUp}
            alt="Sign Up Feature"
            width={320}
            height={320}
            className="absolute"
          />
        )}
        {activeTab === 3 && (
          <Image
            src=""
            alt="User Button Feature"
            // width={280}
            // height={280}
            className="absolute"
          />
        )}
        {activeTab === 4 && (
          <Image
            src=""
            alt="User Profile Feature"
            // width={280}
            // height={280}
            className="absolute"
          />
        )}
      </div>
    </div>
  );
}
