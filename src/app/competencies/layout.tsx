import SideBar from "@/components/sidebar";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Teaching Competency",
  description:
    "Teaching competency is the ability to teach effectively. This is achieved through the knowledge of the subject matter and the ability to communicate it to the students in a way that they can understand. Teaching competency is also the ability to evaluate the students and ensure that they have understood the concepts taught.",
};

const Nav_elements = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "profile",
    link: "/profile",
  },
  {
    title: "dashboard",
    link: "/dashboard",
  },
  {
    title: "ressources",
    link: "/ressources",
  },
  {
    title: "discussion forum",
    link: "/forum",
  },
  {
    title: "contact-us",
    link: "/#footer",
  },
];
const AlternateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative  flex max-h-screen flex-row justify-start gap-4 overflow-hidden bg-base-200 min-h-screen min-w-full px-4">
      <nav className="hide-scrollbar min-h-max max-w-xs min-w-[20rem] overflow-scroll py-5">
        <SideBar />
      </nav>
      <div className="flex flex-col gap-4 overflow-scroll py-5 flex-grow">
        <div className="min-h-16 shadow-md sticky top-0 flex flex-row items-center justify-start gap-4 rounded-lg bg-base-100 px-4">
          {Nav_elements.map((e) => (
            <Link
              href={e.link}
              className="rounded-lg border text-primary border-primary/30 p-1 px-4 capitalize transition-all duration-300 hover:bg-primary/90 hover:text-primary-content hover:underline"
              key={e.title}
            >
              {e.title}
            </Link>
          ))}
        </div>
        <div className="flex-grow flex flex-col gap-4 rounded-lg bg-base-100 px-10 h-fit">
          {children}
        </div>
      </div>
    </section>
  );
};
export default AlternateLayout;
