import CompetencyNav from "@/components/competency-nav";
import type { Metadata } from "next";
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
      <CompetencyNav />
      {children}
    </section>
  );
}
