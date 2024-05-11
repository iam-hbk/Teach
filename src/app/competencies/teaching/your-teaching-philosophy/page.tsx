import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { CiSaveDown1 } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";

type Props = {};

const YourTeachingPhilosophy = (props: Props) => {
  return (
    <>
      <h1 className="my-10 text-6xl font-bold capitalize text-teaching">
        TEACHING PHILOSOPHY
      </h1>
      <div className="text-teaching text-2xl capitalize hover:underline cursor-pointer">
        Introduction
      </div>
      <div className="">
        <p className="rounded-md bg-base-200/50 mb-10 p-4">
          You are probably sitting by your computer now, thinking{" "}
          <b>“What is a teaching philosophy?”</b> or{" "}
          <b>
            “How am I going to write one for my teaching portfolio for my
            promotion application?”
          </b>{" "}
          or you may be asking the question{" "}
          <b>
            “I wrote a teaching philosophy for my last promotion application,
            how should I write my teaching philosophy statement for this next
            promotion application?”
          </b>{" "}
          This section together with the resources listed will hopefully aid you
          to write an amazing teaching philosophy statement that speaks true to
          who you are as a teacher for your own personal development and
          promotion application. Let&apos;s begin…
        </p>
      </div>
      <div className="text-teaching text-2xl capitalize hover:underline cursor-pointer">
        What is a Teaching Philosophy?
      </div>
      <div className="">
        <div className="rounded-md bg-base-200/50 mb-10 p-4">
          According to Lamberti (2010), a teaching philosophy reveals your
          teaching strategies, style and goals and creates a picture of you are
          as a teacher.
          <em className="mt-2 block">
            To understand your own teaching philosophy, ask yourself the
            following questions:
          </em>
          <div className="text-primary">
            <p>What are my professional beliefs and values?</p>{" "}
            <p>How have my views on teaching and learning developed?</p>{" "}
            <p>
              How do I translate into practice my views on teaching and
              learning?
            </p>
          </div>
          <p className="mt-4">
            Additional questions that can assist you in formulating your teaching philosophy
            statement can be found on the Massachusetts Institutes of Technology
            (MIT){" "}
            <Link
              href={
                "https://tll.mit.edu/teaching-resources/faculty-applications/teaching-philosophy-statements/"
              }
              target="_blank"
              className="link-primary underline"
            >
              Teaching and Learning Lab
            </Link>
          </p>
        </div>
      </div>
      <div className="text-teaching text-2xl capitalize hover:underline cursor-pointer">
        What is the purpose of a teaching philosophy statement?
      </div>
      <div className="">
        <div className="rounded-md bg-base-200/50 mb-10 p-4">
          Your teaching philosophy statement basically influences your
          perspective of your students and the way you teach your students. It
          is a document that displays your general belief of how you approach
          your teaching.{" "}
        </div>
      </div>
      <div className="text-teaching  text-2xl capitalize ">
        Resources - Developing a great teaching Philosophy statement
      </div>
      <div className="">
        <div className="rounded-md bg-base-200/50 mb-10 p-4">
          Writing a Teaching Philosophy statement is perceived as a daunting
          task, so we have provided a few resources that can help get you
          started.{" "}
          <b className="font-bold">
            The Division for Teaching Excellence (DoTE)
          </b>{" "}
          at the University of Johannesburg runs great workshops on how to
          develop your Teaching Philosophy. Contact them at{" "}
          <Link
            className="link-primary underline"
            href={"mailto:dote@uj.ac.za"}
          >
            dote@uj.ac.za
          </Link>{" "}
          to enquire about their next workshop.
        </div>
      </div>
      <span className="mt-4 flex items-center gap-3 text-xl text-primary">
        <BsInfoCircleFill size={24} />
        Here are a few resources below
      </span>
      <span className="font-bold text-secondary">
        Links on Teaching Philosophy Statements from Leading Universities
      </span>
      <div className=" rounded-md bg-base-200/50 mb-10 p-4">
        <ul className="list-inside list-disc">
          <li>
            <Link
              href={
                "https://tll.mit.edu/teaching-resources/faculty-applications/teaching-philosophy-statements/"
              }
              target="_blank"
              className="link-primary underline"
            >
              Massachusetts Institutes of Technology (MIT)
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://cft.vanderbilt.edu/guides-sub-pages/teaching-statements/"
              }
              target="_blank"
              className="link-primary underline"
            >
              Vanderbilt University - Center for Teaching
            </Link>
          </li>
          <li>
            <Link
              href={"https://crlt.umich.edu/tstrategies/tstpum"}
              target="_blank"
              className="link-primary underline"
            >
              University of Michigan
            </Link>{" "}
            - this website from the CRLT Center for Research on Learning &
            Teaching University of Michigan provides examples of teaching
            philosophy statements across various disciplines
          </li>
        </ul>
      </div>
      <span className="font-bold text-secondary">Books/Guides</span>
      <div className="rounded-md bg-base-200/50 mb-10 p-4">
        <ul className="list-inside list-disc">
          <li>
            <Link
              href={"http://www.ucalgary.ca/taylorinstitute/resources"}
              target="_blank"
              className="link-primary underline"
            >
              Teaching Philosophies and Teaching Dossiers Guide. Calgary, AB:
              Taylor Institute for Teaching and Learning
            </Link>{" "}
            <span>
              - Kenny, N., Berenson, C., Jeffs, C., Nowell, L., & Grant, K.
              (2018)
            </span>
            <Link
              href={
                "https://utfs.io/f/f8ef22cb-ad83-40c5-b679-bbb2a4d5a903-6zimm5.pdf"
              }
              target="_blank"
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              // target="_blank"
              className="link-primary underline"
            >
              Writing a Teaching Philosophy Statement
            </Link>{" "}
            <span>- Trinity College of Dublin, University of Dublin</span>
            <Link
              href={
                "https://utfs.io/f/7e3ee8ad-84c7-4fdb-ae78-cdc5cac4d1bd-6mzpz.pdf"
              }
              target="_blank"
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
          <li>
            <Link href={"#"} className="link-primary underline">
              Writing a Teaching Philosophy Statement - An evidence based
              approach
            </Link>{" "}
            <span>- Medina & Draugalis (2013) - University of Oklahoma </span>
            <Link
              href={
                "https://utfs.io/f/00d74661-cd79-4c33-96f4-80aac88cbd11-w84ma7.pdf"
              }
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
        </ul>
      </div>
      <span className="font-bold text-secondary">Videos</span>
      <div className="rounded-md p-4 sm:max-w-xl">
        <ul className="list-inside">
          <li>
            <div className="relative overflow-hidden pb-[60%]">
              <iframe
                style={{
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                }}
                src={"https://www.youtube.com/embed/tbqS25mHCiM"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default YourTeachingPhilosophy;
