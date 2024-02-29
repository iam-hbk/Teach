import CompetencyNav from "@/components/competency-nav";
import type { Metadata } from "next";
import { CgMenuLeft } from "react-icons/cg";
export const metadata: Metadata = {
  title: "Teaching Competency",
  description:
    "Teaching competency is the ability to teach effectively. This is achieved through the knowledge of the subject matter and the ability to communicate it to the students in a way that they can understand. Teaching competency is also the ability to evaluate the students and ensure that they have understood the concepts taught.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative mb-8 flex min-h-screen flex-col items-center overflow-auto bg-base-100 pt-[120px]">
      <div className="navbar mt-3 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <CgMenuLeft />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <CompetencyNav />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {children}
    </section>
  );
}
