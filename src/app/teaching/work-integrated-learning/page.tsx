import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { CiSaveDown1 } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";

type Props = {};

const WorkIntegratedLearning = (props: Props) => {
  return (
    <div className="container flex flex-col gap-4 lg:mt-8">
      <h1 className="m-3 self-center text-4xl font-bold uppercase text-blue-800">
        WORK INTEGRATED LEARNING
      </h1>
      <div className="collapse collapse-arrow rounded-none ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="text-teaching collapse-title text-2xl uppercase ">
          Introduction
        </div>
        <div className="collapse-content">
          <p className="rounded-md bg-base-200/50 p-4">
            So, you are tasked with including a{" "}
            <b>Work-Integrated Learning (WIL)</b>
            component in your module; what do you do? The first thing is to
            understand WIL and its purpose in any curriculum. So…
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none ">
        <input type="radio" name="my-accordion-2" />
        <div className="text-teaching collapse-title text-2xl uppercase ">
          WHAT IS WORK INTEGRATED LEARNING?
        </div>
        <div className="collapse-content">
          <div className="rounded-md bg-base-200/50 p-4">
            “WIL is used as an umbrella term to describe curricular, pedagogic
            and assessment practices across a range of academic disciplines that
            integrate formal learning and workplace concerns. The integration of
            theory and practice in student learning can occur through a range of
            WIL approaches, apart from formal or informal work placements. (CHE-
            Work Integrated Learning: Good Practice Guide, 2011, p. 4)
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none ">
        <input type="radio" name="my-accordion-2" />
        <div className="text-teaching collapse-title text-2xl uppercase ">
          WHAT IS THE PURPOSE OF WORK-INTEGRATED LEARNING?
        </div>
        <div className="collapse-content">
          <div className="rounded-md bg-base-200/50 p-4">
            “WIL is primarily intended to enhance student learning, and to this
            end, several innovative curricular, pedagogical and assessment forms
            have developed in response to concerns about graduateness,
            employability and civic responsibility; examples include
            action-learning, apprenticeships, cooperative education,
            experiential learning, inquiry learning, inter-professional
            learning, practicum placements, problem-based learning,
            project-based learning, scenario learning, service-learning,
            team-based learning, virtual or simulated WIL learning, work-based
            learning, work experience, workplace learning, and so on.” (CHE-
            Work Integrated Learning: Good Practice Guide, 2011, p. 4)
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none ">
        <input type="radio" name="my-accordion-2" />
        <div className="text-teaching collapse-title text-2xl uppercase ">
          RESOURCES - WORK INTEGRATED LEARNING
        </div>
        <div className="collapse-content">
          <div className="rounded-md bg-base-200/50 p-4">
            <h5 className="my-5">
              Work-integrated learning is considered a modality under
              Work-Integrated Education (WIE).
            </h5>
            <p className="flex flex-col">
              UJ’s 2022 Policy on <b>Work-Integrated Education (WIE)</b>{" "}
              indicates that it is “embedded in a range of career-orientated
              programmes, allows for the acquisition of knowledge, skills and
              behaviours by means of blended lectures and practical work,
              complemented by contextualised and well-structured authentic
              modalities of learning in action.” (p. 1) The UJ Policy further
              indicates that WIE “is a wide and inclusive concept which embraces
              different modalities of learning in action, and is commonly
              referred to as work integrated learning or WIL globally. Some of
              the main modalities are:
              <ul className="m-8 max-w-max list-inside list-none self-center ">
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Work-integrated learning (WIL),
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Problem-based learning (PBL),
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Community based learning (CBL),
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Project-based learning (PjBL),
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Simulations,
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Teaching practice (TP),
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1">
                  Service learning (SL),and
                </li>
                <li className="m-1 list-item rounded-md border-b-2 border-gray-300 bg-base-200/80 px-3 py-1 last:border-none">
                  Internships. “(p. 2)
                </li>
              </ul>
              These modalities which allow for the practice of knowledge in
              different fields of study, support the ‘learning to be’ philosophy
              of teaching. The ‘learning to be’ teaching philosophy is defined
              in the UJ Policy on Teaching and Learning (approved, 2016), as
              follows: “Learning to be”: a view of higher education that
              conceptualises learning as becoming a practitioner of a knowledge
              and professional domain. Learning to be presupposes learning the
              practices of the knowledge domain (discipline or profession),
              which include principles, dispositions, attributes, competencies,
              activities, skills, procedures and values. It also requires
              learning how to best utilise the conceptual frameworks and/or
              theories of the domain, as well as the practices of inquiry, to
              identify and solve problems or interpret and address everyday
              issues.
            </p>
          </div>
        </div>
      </div>
      <span className="mt-4 flex items-center gap-3 text-xl text-primary">
        <BsInfoCircleFill size={24} />
        Here are a few resources below
      </span>
      <span className="font-bold text-secondary">
        Links on Teaching Philosophy Statements from Leading Universities
      </span>
      <div className=" rounded-md bg-base-200/50 p-4">
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
      <div className="rounded-md bg-base-200/50 p-4">
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
    </div>
  );
};

export default WorkIntegratedLearning;
