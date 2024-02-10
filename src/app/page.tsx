import NavigationWheel from "@/components/wheel";
import Image from "next/image";
import teach_logo from "@/assets/teach_logo.svg";
import Link from "next/link";
import LandingPageText from "@/components/landing-page-text";
import { FaCircleChevronRight } from "react-icons/fa6";
import SmoothLink from "@/components/smooth-link";
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
      <div className="text-xl" id="how-it-works">How things work</div>
      <section className="relative flex min-h-[80vh] w-full flex-col gap-4 border border-red-500 p-6 md:flex-row">
        {/* Orange element */}
        <div className="min-w-[35%] bg-orange-500 md:col-span-1 md:row-span-2">
          {/* Content here */}
          orange element
        </div>
        {/* Red element with flex children */}

        <div className="flex w-full flex-wrap items-center justify-center gap-10 p-10">
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Learning Resources</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">Self Assessment</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">Discussion forum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact max-w-[300px] rounded-md bg-base-100 shadow-md">
            <figure>
              <Image
                width={400}
                height={200}
                style={{
                  objectFit: "scale-down",
                }}
                src="/class-image.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize">Track progress </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <div className="card-actions justify-end">
                <button className="link-primary link inline-flex items-center justify-center gap-2 capitalize">
                  View More <FaCircleChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
