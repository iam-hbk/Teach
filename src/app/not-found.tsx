import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/teach_logo.svg";
type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <Image
        src={Logo}
        height={250}
        width={250}
        className="h-[70px] w-auto mb-10"
        alt="Teach logo"
      />

      <span>Page Not Built Yet ! Come back later</span>
      <Link className="link-primary underline" href={"/"}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
