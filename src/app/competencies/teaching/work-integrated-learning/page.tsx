import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

type Props = {};

const WorkIntegratedLearning = (props: Props) => {
  return (
    <>
      <h1 className="my-10 text-6xl font-bold uppercase text-teaching">
        Work Intergrated Learning
      </h1>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Introduction
      </div>
      <div className="">
        <p className="mb-10 rounded-md bg-base-200/50 p-4">
          So, you are tasked with including a{" "}
          <b>Work-Integrated Learning (WIL)</b>
          component in your module; what do you do? The first thing is to
          understand WIL and its purpose in any curriculum. So…
        </p>
      </div>
      <div className=" text-2xl capitalize text-teaching ">
        What is work-integrated learning?
      </div>
      <div className="">
        <div className="mb-10 rounded-md bg-base-200/50 p-4">
          “WIL is used as an umbrella term to describe curricular, pedagogic and
          assessment practices across a range of academic disciplines that
          integrate formal learning and workplace concerns. The integration of
          theory and practice in student learning can occur through a range of
          WIL approaches, apart from formal or informal work placements. (CHE-
          Work Integrated Learning: Good Practice Guide, 2011, p. 4)
        </div>
      </div>
      <div className=" text-2xl capitalize text-teaching ">
        What is the purpose of work-integrated learning?
      </div>
      <div className="">
        <div className="mb-10 rounded-md bg-base-200/50 p-4">
          “WIL is primarily intended to enhance student learning, and to this
          end, several innovative curricular, pedagogical and assessment forms
          have developed in response to concerns about graduateness,
          employability and civic responsibility; examples include
          action-learning, apprenticeships, cooperative education, experiential
          learning, inquiry learning, inter-professional learning, practicum
          placements, problem-based learning, project-based learning, scenario
          learning, service-learning, team-based learning, virtual or simulated
          WIL learning, work-based learning, work experience, workplace
          learning, and so on.” (CHE- Work Integrated Learning: Good Practice
          Guide, 2011, p. 4)
        </div>
      </div>
      <div className=" text-2xl capitalize text-teaching ">
        Ressources - work-integrated learning
      </div>
      <div className="">
        <div className="mb-10 rounded-md bg-base-200/50 p-4">
          <h5 className="my-5">
            Work-integrated learning is considered a modality under
            Work-Integrated Education (WIE).
          </h5>
          <div className="flex flex-col">
            UJ’s 2022 Policy on <b>Work-Integrated Education (WIE)</b> indicates
            that it is “embedded in a range of career-orientated programmes,
            allows for the acquisition of knowledge, skills and behaviours by
            means of blended lectures and practical work, complemented by
            contextualised and well-structured authentic modalities of learning
            in action.” (p. 1) The UJ Policy further indicates that WIE “is a
            wide and inclusive concept which embraces different modalities of
            learning in action, and is commonly referred to as work integrated
            learning or WIL globally. Some of the main modalities are:
            <ul className="m-8 max-w-max list-inside list-none self-center text-primary ">
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Work-integrated learning (WIL)
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Problem-based learning (PBL)
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Community based learning (CBL)
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Project-based learning (PjBL)
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Simulations
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Teaching practice (TP)
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2">
                Service learning (SL)and
              </li>
              <li className="m-1 list-item rounded-md border border-b-2 border-primary/40 bg-base-200/80 px-3 py-2 ">
                Internships. “(p. 2)
              </li>
            </ul>
            These modalities which allow for the practice of knowledge in
            different fields of study, support the ‘learning to be’ philosophy
            of teaching. The ‘learning to be’ teaching philosophy is defined in
            the UJ Policy on Teaching and Learning (approved, 2016), as follows:
            <p className="m-6 font-light italic">
              <em className="font-bold text-secondary">“Learning to be” </em>
              <br /> A view of higher education that conceptualises learning as
              becoming a practitioner of a knowledge and professional domain.
              Learning to be presupposes learning the practices of the knowledge
              domain (discipline or profession), which include principles,
              dispositions, attributes, competencies, activities, skills,
              procedures and values. It also requires learning how to best
              utilise the conceptual frameworks and/or theories of the domain,
              as well as the practices of inquiry, to identify and solve
              problems or interpret and address everyday issues.
            </p>
          </div>
        </div>
      </div>
      <span className="mt-4 flex items-center gap-3 text-xl text-primary">
        <BsInfoCircleFill size={24} />
        Here are a few resources below
      </span>
      <div className=" rounded-md bg-base-200/50 p-4">
        <ul className="list-inside list-disc">
          <li>
            <Link
              href={"https://webapps.dhet.gov.za/iWIL"}
              target="_blank"
              className="link-primary underline"
            >
              https://webapps.dhet.gov.za/iWIL
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://www.universityworldnews.com/post.php?story=20220412102705795"
              }
              target="_blank"
              className="link-primary underline"
            >
              Work-integrated learning to help with graduate unemployment; Edwin
              Naidu 14 April 2022
            </Link>
          </li>
          <li>
            <Link
              href={"www.ijwil.org"}
              target="_blank"
              className="link-primary underline"
            >
              International Journal of Work-Integrated Learning ISSN: 2538-1032
            </Link>{" "}
          </li>
        </ul>
      </div>
      <span className="font-bold text-secondary">
        Books/Guides/Journal Articles
      </span>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <ul className="list-inside list-disc">
          <li>
            <span>UJ WIE Policy on Work-Integrated Education (WIE) (2022)</span>
            <Link
              href={
                "https://utfs.io/f/6f370b50-1eb6-4528-a1f5-8a9231583d09-45abpl.pdf"
              }
              target="_blank"
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
          <li>
            <span>
              A comparative study of cooperative education and workintegrated
              learning in Germany, South Africa, and Namibia
            </span>
            <Link
              href={
                "https://utfs.io/f/35fd7238-db77-4b04-8bbc-68d1b5c41471-sixt1j.pdf"
              }
              target="_blank"
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>

          <li>
            <span>
              A multiple case design for the investigation of information
              management processes for work-integrated learning
            </span>
            <Link
              href={
                "https://utfs.io/f/680a94f9-136a-4f75-8cda-0d2e4881c797-jm1bbl.pdf"
              }
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>

          <li>
            <span>
              Becoming a teacher Research on the work-integrated learning of
              student teachers NWU
            </span>
            <Link
              href={
                "https://utfs.io/f/92fe6b6e-5f0a-4f68-807f-df4cbced8482-lyepr2.pdf"
              }
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
          <li>
            <span>
              Work Integrated Learning for Student Career Prospects Govender &
              Wait 2017
            </span>
            <Link
              href={
                "https://utfs.io/f/a43b6829-ccc9-4519-9979-77ebe293e543-alq5ii.pdf"
              }
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WorkIntegratedLearning;
