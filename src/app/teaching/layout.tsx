import CompetencyNav from "@/components/competency-nav";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Teaching Competency",
  description:
    "Teaching competency is the ability to teach effectively. This is achieved through the knowledge of the subject matter and the ability to communicate it to the students in a way that they can understand. Teaching competency is also the ability to evaluate the students and ensure that they have understood the concepts taught.",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <section className="relative mb-8 flex min-h-screen flex-col items-center overflow-auto bg-base-100 pt-[120px]">
//       <CompetencyNav />
//       <div className="mx-10">{children}</div>
//     </section>
//   );
// }

const AlternateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative bg-blue-500 mb-8 flex min-w-full min-h-screen overflow-auto bg-base-100 ">
      <nav className="bg-red-400"><Link href={"/"} className="link-primary underline">Home</Link></nav>
      <div className="">{children}</div>
    </section>
  );
};
export default AlternateLayout;