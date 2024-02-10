import NavigationWheel from "@/components/wheel";
import Image from "next/image";
import teach_logo from "@/assets/teach_logo.svg";
import Link from "next/link";
import LandingPageText from "@/components/landing-page-text";
import SmoothLink from "@/components/smooth-link";
import Section2 from "@/components/section-2";
export default function Home() {
  return (
    <main>
      <section className="glass hero min-h-screen bg-opacity-60 bg-gradient-to-tr from-primary to-secondary">
        {/* <div className="mask mask-parallelogram absolute right-[-35%] top-0 h-full w-full bg-primary bg-opacity-50" /> */}
        <div className="hero-content mt-16 flex-col lg:flex-row">
          <div className="flex w-[40%] flex-col items-center justify-evenly space-y-3">
            <Image src={teach_logo} height={180} width={180} alt="teach logo" />
            <p className="text-center text-primary-content">
              The Model provides a quick scan of the critical competencies
              required for an academic on all levels.
            </p>
            <LandingPageText />
            <div className="flex flex-row items-center justify-center space-x-2 pt-10">
              <SmoothLink
                targetId="how-it-works"
                className="btn bg-transparent text-primary-content hover:text-accent"
              >
                How it works
              </SmoothLink>
              <Link href="/how-it-works" className="btn-primary-content btn">
                Register
              </Link>
            </div>
          </div>
          <NavigationWheel />
        </div>
      </section>
      <div className="text-xl" id="how-it-works">
        How things work
      </div>
      <Section2 />
    </main>
  );
}
