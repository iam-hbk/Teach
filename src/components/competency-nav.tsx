"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMenuLeft, CgSelect } from "react-icons/cg";
import data from "@/utils/data";
import Link from "next/link";
type Props = {};

const CompetencyNav = (props: Props) => {
  const path = usePathname();
  const competency = formatCompetency(getCompetency(path)[0]);
  const subCompetency = getCompetency(path)[1];

  return (
    <div className="mt-3 flex w-full flex-row items-center justify-between bg-base-100 p-2 shadow-sm">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CgMenuLeft />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {competency.subSegments.map((segment) => (
              <li
                key={segment.title}
                style={{
                  color:
                    subCompetency === segment.link
                      ? competency.color
                      : "inherit",
                }}
              >
                {/* {subCompetency + segment.link} */}
                <Link href={segment.link}>{segment.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost flex min-w-[128px] flex-row w-max"
            style={{
              color: competency.color,
            }}
          >
            <span>{competency.title}</span>
            <CgSelect />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href={"/teaching"}>Teaching</Link>
            </li>
            <li>
              <Link href={"/expertise"}>Expertise</Link>
            </li>
            <li>
              <Link href={"/assessment"}>Assessment</Link>
            </li>
            <li>
              <Link href={"/commitment-caring"}>Commitment & Caring</Link>
            </li>
            <li>
              <Link href={"/higher-education"}>Higher Education</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden w-full flex-grow  flex-row items-center justify-start gap-2 px-1 lg:flex">
        {competency.subSegments.map((segment) => (
          <Link
            style={{
              color:
                subCompetency === getCompetency(segment.link)[1]
                  ? competency.color
                  : "inherit",
            }}
            className="rounded-md p-2 text-center text-sm transition-colors duration-300 hover:bg-base-200/50"
            key={segment.title}
            href={segment.link}
          >
            {segment.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompetencyNav;

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
