import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import { LogoProps } from "./LogoProps";

function Logo({ isDrawer = false }: LogoProps) {
  return (
    <div
      className={isDrawer ? "w-32 h-32 mx-auto" : "w-32 h-32 md:w-64 md:h-64"}
    >
      <Image src={LogoImg} alt="GF logo" priority />
    </div>
  );
}

export default Logo;
