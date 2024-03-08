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
  const subCompetency = getCompetency(path)[1];

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
              <details open>
                <summary>
                  <Link className="link-hover" href={competency.link}>
                    {competency.title}
                  </Link>
                </summary>
                <ul>
                  {competency.subSegments.map((segment) => (
                    <li
                      key={segment.title}
                      style={{
                        color:
                          subCompetency === getCompetency(segment.link)[1]
                            ? competency.color
                            : "inherit",
                        backgroundColor:
                          subCompetency === getCompetency(segment.link)[1]
                            ? competency.color + "20"
                            : "inherit",
                      }}
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
function formatCompetency(competency: string) {
  if (competency === "teaching") {
    return data[3];
  } else if (competency === "expertise") {
    return data[4];
  } else if (competency === "assessment") {
    return data[0];
  } else if (competency === "commitment-caring") {
    return { ...data[1], title: "Commitment & Caring" };
  }
  return data[2];
}
