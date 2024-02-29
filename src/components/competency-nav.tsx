"use client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const CompetencyNav = (props: Props) => {
  const path = usePathname();
  const competency = formatCompetency(getCompetency(path));

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">
        {competency}
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <a>Teaching</a>
        </li>
        <li>
          <a>Expertise</a>
        </li>
        <li>
          <a>Assessment</a>
        </li>
        <li>
          <a>Commitment & Caring</a>
        </li>
        <li>
          <a>Higher Education</a>
        </li>
      </ul>
    </div>
  );
};

export default CompetencyNav;

function getCompetency(path: string): string {
  const segments = path.split("/");
  return segments[1] || "";
}
function formatCompetency(competency: string): string {
  if (competency === "teaching") {
    return "Teaching";
  } else if (competency === "expertise") {
    return "Expertise";
  } else if (competency === "assessment") {
    return "Assessment";
  } else if (competency === "commitment-caring") {
    return "Commitment & Caring";
  }
  return "Higher Education";
}
