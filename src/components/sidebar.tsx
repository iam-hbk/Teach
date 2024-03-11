"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMenuLeft, CgSelect } from "react-icons/cg";
import data from "@/utils/data";
import Link from "next/link";
type Props = {};
import TeachLogo from "@/assets/teach_logo.svg";
import Image from "next/image";
// import UJ

const SideBar = (props: Props) => {
  const path = usePathname();
  const currentCompetency = getCompetency(path)[1];
  const currentSubCompetency = getCompetency(path)[2];

  return (
    <>
      <ul className="menu rounded-box w-full min-w-full overflow-scroll bg-base-100 p-4">
        <Image
          src={TeachLogo}
          height={100}
          width={100}
          alt="Teach Logo"
          className="h-100 m-5 w-auto self-start"
        />
        {data.map((competency) => (
          <ul key={competency.title}>
            <li>
              <details
                open={
                  competency.title.toLocaleLowerCase() === currentCompetency
                }
              >
                <summary>
                  <Link className="link-hover" href={competency.link}>
                    <span
                      style={{
                        color: competency.color,
                      }}
                    >
                      {competency.title.charAt(0)}
                    </span>
                    {competency.title.substring(1)}
                  </Link>
                </summary>
                <ul>
                  {competency.subSegments.map((segment) => (
                    <li
                      key={segment.title}
                      style={{
                        color:
                          currentSubCompetency ===
                          getCompetency(segment.link)[2]
                            ? competency.color
                            : "inherit",
                        backgroundColor:
                          currentSubCompetency ===
                          getCompetency(segment.link)[2]
                            ? competency.color + "20"
                            : "inherit",
                      }}
                      className="rounded-lg"
                    >
                      <Link href={segment.link}>{segment.title}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        ))}
      </ul>
    </>
  );
};

export default SideBar;

function getCompetency(path: string): string[] {
  const segments = path.split("/").filter((segment) => segment.length > 0);
  return segments;
}
