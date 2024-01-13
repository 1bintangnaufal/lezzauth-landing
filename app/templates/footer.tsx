import { GhostButton } from "./buttons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-lezzaccent flex justify-between place-items-center px-16 py-4">
      <div>
        <text className="leading-[0px] text-sm">
          Copyright &copy;{currentYear} lezzauth.com
        </text>
      </div>
      <div className="flex gap-2">
        <GhostButton>Book a Demo</GhostButton>
        <GhostButton>Sign in</GhostButton>
      </div>
    </div>
  );
}
