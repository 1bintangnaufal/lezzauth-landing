import Image from "next/image";
import Ic_Play from "@/public/ic-play.svg";
import Ic_X from "@/public/ic-x.svg";

export function PrimaryButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <button
        className={`w-fit h-8 text-xs bg-lezzindigo rounded-full px-4 py-2 font-medium hover:bg-lezzchia transition-all ease-out duration-300 delay-150 ${
          className || ""
        }`}
      >
        {children}
      </button>
    </>
  );
}
export function XButton({ className }: { className?: string }) {
  return (
    <>
      <button
        className={`aspect-square p-1 text-xs bg-lezzindigo rounded-full size-6 hover:bg-lezzchia transition-all ease-out duration-300 delay-150 ${
          className || ""
        }`}
      >
        <Image src={Ic_X} alt="Close" />
      </button>
    </>
  );
}
export function GhostButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <button
        className={`w-fit h-8 text-xs rounded-full px-4 py-2 hover:bg-ghosthover transition-all ease-out duration-300 delay-150 ${
          className || ""
        }`}
      >
        {children}
      </button>
    </>
  );
}
export function CustomIconButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <button
        className={`w-fit h-8 text-2xl rounded-full px-2 hover:bg-ghosthover transition-all ease-out duration-300 delay-150 ${
          className || ""
        }`}
      >
        {children}
      </button>
    </>
  );
}
export function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button className="w-fit text-sm bg-lezzindigo rounded-full px-6 py-4 font-medium hover:bg-lezzchia transition-all ease-out duration-300 delay-150">
        {children}
      </button>
    </>
  );
}

export function PlayButton({ className }: { className?: string }) {
  return (
    <>
      <button
        className={`px-6 aspect-square size-20 text-sm bg-lezzindigo rounded-full hover:bg-lezzchia hover:scale-110 hover:ring-8 hover:ring-lezzborder transition-all ease-out duration-300 delay-150 ${
          className || ""
        }`}
      >
        <Image src={Ic_Play} alt="Playback" width={40} height={40} />
      </button>
    </>
  );
}
