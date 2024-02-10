"use client";

import Link from "next/link";
import React, { useRef, FC, MouseEvent } from "react";

interface ClientSideLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string;
  children: React.ReactNode;
}
const SmoothLink: FC<ClientSideLinkProps> = (props) => {
  const { targetId, children, className } = props;
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default SmoothLink;
