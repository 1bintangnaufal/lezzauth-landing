import Image from "next/image";
import { PrimaryButton, GhostButton } from "./buttons";
import brand from "@/public/logo.svg";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-lezzbg flex justify-between place-items-center border-b border-solid border-b-lezzborder px-16 py-2">
      <div>
        <Image
          src={brand}
          alt="Lezzauth Logo"
          className="w-auto h-auto scale-75"
        />
      </div>
      <div className="flex gap-2">
        <PrimaryButton>Book a Demo</PrimaryButton>
        <GhostButton>Sign in</GhostButton>
      </div>
    </div>
  );
}
