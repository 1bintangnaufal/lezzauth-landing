import { DecoratedH3, DefaultH3 } from "./typefaces";

export default function Showcase() {
  const signInText = "<SignIn/>";
  const signUpText = "<SignUp/>";
  const userButtonText = "<UserButton/>";
  const userProfileText = "<UserProfile/>";
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-6">
        <div>
          <DecoratedH3>Auth & User Management</DecoratedH3>
          <DefaultH3>with just</DefaultH3>
          <div className="flex place-items-baseline gap-2">
            <DecoratedH3>One Line</DecoratedH3>
            <DefaultH3>of Code</DefaultH3>
          </div>
        </div>
        <div className="flex flex-col gap-4 place-items-start">
          <div className="relative group">
            <input
              type="radio"
              id="featureA"
              value={1}
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
              className="block cursor-pointer select-none bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {signInText}
            </label>
          </div>
          <div className="relative group">
            <input
              type="radio"
              id="featureB"
              value={2}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureB"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureB"
              className="block cursor-pointer select-none bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {signUpText}
            </label>
          </div>
          <div className="relative group">
            <input
              type="radio"
              id="featureC"
              value={3}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureC"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureC"
              className="block cursor-pointer select-none bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {userButtonText}
            </label>
          </div>
          <div className="relative group">
            <input
              type="radio"
              id="featureD"
              value={4}
              name="showcaseTab"
              className="peer hidden"
            />
            <label
              htmlFor="featureD"
              className="absolute top-0 left-0 cursor-pointer w-2 h-full bg-lezzborder z-10 peer-checked:bg-lezzchia rounded-l-md transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            />
            <label
              htmlFor="featureD"
              className="block cursor-pointer select-none bg-lezzaccent w-96 py-2 ps-6 text-2xl rounded-md group-hover:bg-lezzborder transition-all ease-out duration-300 delay-150 sepia-[.5] peer-checked:filter-none"
            >
              {userProfileText}
            </label>
          </div>
        </div>
      </div>
      <div className="flex place-self-center">
        <p>affh iyyh?</p>
      </div>
    </div>
  );
}
