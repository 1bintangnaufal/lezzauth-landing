import Image from "next/image";
import { PrimaryButton, GhostButton } from "./buttons";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-lezzbg flex justify-between place-items-center border-b border-solid border-b-lezzborder px-20 py-4">
      <div>
        <Image src="/logo.svg" alt="Lezzauth Logo" width={200} height={100} />
      </div>
      <div className="flex gap-4">
        <PrimaryButton>Book a Demo</PrimaryButton>
        <GhostButton>Sign in</GhostButton>
      </div>
    </div>
  );
}
