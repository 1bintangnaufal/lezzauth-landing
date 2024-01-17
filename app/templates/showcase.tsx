import React, { useState } from "react";
import { DecoratedH3, DefaultH3 } from "./typefaces";
import Image from "next/image";
import { PrimaryButton } from "./buttons";
import A_sectionSupport from "@/public/lezzform-feature-showcase-placeholder.png";

export default function Showcase() {
  const formText = "<form/>";
  type Tabs = 1 | 2 | 3 | 4;
  const [activeTab, setActiveTab] = useState<Tabs>(1);
  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(Number(event.target.value) as Tabs);
  };
  return (
    <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-24">
      <div className="flex flex-col gap-6">
        <div className="whitespace-pre-wrap">
          <DefaultH3>Build your form by </DefaultH3>
          <span className="inline-block"><DecoratedH3>Drag & Drop</DecoratedH3></span>
          <span className="inline-block"><DefaultH3>, then put this </DefaultH3></span>
          <span className="inline-block"><DecoratedH3>one line code </DecoratedH3></span>
          <span className="inline-block"><DefaultH3>in your Frontend</DefaultH3></span>
        </div>
        <div className="flex flex-col gap-2 place-items-center sm:place-items-start">
          <div className="relative group">
            <input
              type="radio"
              id="featureA"
              value={1}
              checked={activeTab === 1}
              onChange={handleTabChange}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureA"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezztangerine rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureA"
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-fit sm:w-96 py-2 ps-6 pe-4 sm:pe-0 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {formText}
            </label>
          </div>
          {/* <div className="relative group">
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
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-fit sm:w-96 py-2 ps-6 pe-4 sm:pe-0 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
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
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-fit sm:w-96 py-2 ps-6 pe-4 sm:pe-0 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
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
              className="block cursor-pointer select-none font-monaspace bg-lezzaccent w-fit sm:w-96 py-2 ps-6 pe-4 sm:pe-0 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {userProfileText}
            </label>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:place-items-center sm:place-content-center static sm:relative">
        <Image
          src={A_sectionSupport}
          alt="Common Graphics"
          className="hidden sm:block absolute object-cover object-left-top"
        />
        {/* <PrimaryButton className="sm:absolute place-self-center sm:left-0 sm:bottom-0">
          View Code
        </PrimaryButton> */}
        {/* {activeTab === 1 && (
          <Image
            src={A_signIn}
            alt="Feature: Sign In"
            width={320}
            height={320}
            className="sm:absolute"
          />
        )}
        {activeTab === 2 && (
          <Image
            src={A_signUp}
            alt="Feature: Sign Up"
            width={320}
            height={320}
            className="sm:absolute"
          />
        )}
        {activeTab === 3 && (
          <Image
            src={A_signIn}
            alt="Feature: User Button"
            width={320}
            height={320}
            className="relative sm:absolute"
          />
        )}
        {activeTab === 4 && (
          <Image
            src={A_signUp}
            alt="Feature: User Profile"
            width={320}
            height={320}
            className="relative sm:absolute"
          />
        )} */}
      </div>
    </div>
  );
}
