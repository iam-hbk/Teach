import CompetencyNav from "@/components/competency-nav";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Commitment Competency",
  description:
    "Commitment competency is the ability to demonstrate dedication and loyalty to the organization. This is achieved through the ability to work hard and put in the extra effort to achieve the goals of the organization. Commitment competency is also the ability to be reliable and dependable and to follow through on commitments.",
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
