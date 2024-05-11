import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

type Props = {};

const SupervisionSkills = (props: Props) => {
  return (
    <>
      <h1 className="my-10 text-6xl font-bold uppercase text-teaching">
        Postgraduate Supervision
      </h1>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Introduction
      </div>
      <div className="">
        <p className="mb-10 rounded-md bg-base-200/50 p-4">
          You might be beginning your journey as a supervisor or have many years
          of supervision experience of postgraduate students (Honours, Masters
          and PhD students). Whatever level of experience you may have in
          postgraduate supervision, there is always room to grow and enhance
          your skills as a supervisor. Let us begin…
        </p>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        What is postgraduate supervision &amp; Co-supervision?
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        According to the <b>CBE Student Supervisor Agreement Form</b> the:
        <p>
          <b className="mt-3 inline-block text-primary">“Supervisor”</b> means
          the person appointed by the University to give professional and
          academic guidance to a student registered for a postgraduate research
          project under his/her name and to ensure the provision of adequate
          financial, spatial and infrastructural support for the research
          project before enrolment. <br />{" "}
          <b className="mt-3 inline-block text-primary">“Co-Supervisor”</b>{" "}
          means a person who is not necessarily on the staff of the University
          and who, in consultation with the supervisor, is appointed to give
          assistance and guidance to a student in those areas where the
          supervisor is not sufficiently familiar with the full scope of the
          field to be covered in the project, where the project is
          multidisciplinary or for purposes of mentorship.
        </p>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Responsibilities of the supervisor and co-supervisor
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        To fully understand your role as a research supervisor or a
        co-supervisor, it is advisable that you read the{" "}
        <span className="text-secondary">
          {" "}
          CBE Student Supervisor Agreement Form
        </span>
        , which{" "}
        <span className="text-secondary">
          outlines the student&apos;s responsibilities and legitimate
          expectations by the supervisor, co-supervisor and the student.
        </span>
      </div>
      <div className="cursor-pointer text-2xl text-teaching hover:underline">
        What CBE requirements must be met by an academic employee to supervise
        and co-supervise Masters and PhD students?
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        The CBE Higher Degrees Committee Standard Operating Procedures{" "}
        <span className="text-primary underline">CBE HDC SOP Oct 2020</span>{" "}
        (this can be found on the UJ SharePoint) indicates the requirements that
        need to be met by academics that would allow them to supervise the
        research of Masters and PhD students. This document also provides
        guidelines on external assessors and assessments.
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        The supervision process
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        The supervision process must be followed strictly according to the
        university, college and departmental processes. If students’ research is
        prolonged due to supervisors not providing timely feedback and not
        following the processes stipulated by the university and the college,
        financial ramifications for both students, supervisors, and departments
        could occur <br />
        <br /> Prof Thea Tselepis (Department of Business Management) and Prof
        Adri Drostkie (Director of the School of Management) in the CBE have
        developed a Postgraduate Research Toolkit for the School of Management
        <Link
          href={
            "https://utfs.io/f/b39ffd87-8d5d-467b-8061-5be265d53eaa-4pknv2.pdf"
          }
          target="_blank"
          className="link-primary m-1 underline"
        >
          Proposed toolkit for postgrad in SOM June 2023.pdf
        </Link>{" "}
        that has several linked documents and tools to support the research
        journey <b>after the proposal is accepted.</b> This toolkit is
        invaluable to ensure that you, as a supervisor, co-supervisor and your
        student follow all the necessary procedures and processes to complete
        their studies. Please use the proposed toolkit to ensure you meet your
        role expectations as a supervisor. <br /> Furthermore, the UJ Higher
        Degrees Policy{" "}
        <Link
          href={
            "https://utfs.io/f/1a67ad14-3eec-4d3c-afcf-81ba268a9054-dpmjhl.pdf"
          }
          target="_blank"
          className="link-primary m-1 my-2 inline-block underline"
        >
          higher-degrees.pdf
        </Link>
        should also be used. <br /> <b>This policy</b> governs all processes
        leading to the award of higher degrees at the University of
        Johannesburg, ensuring that our higher degrees meet local and
        international expectations of academic and procedural rigour and
        integrity. <br /> <br /> According to this policy, “This document must
        be read in conjunction with, among others, the Higher Degrees
        Administration, the Student Supervisor Relationship Policy, the
        Plagiarism Policy, the Policy on Authorship, and the University’s
        Academic Regulations, specifically those sections of the Regulations
        dealing with master’s and doctoral degrees” (p. 2). (All of these
        policies can be found on the UJ Sharepoint).
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Building your supervision capability and experience (Taken from the
        postgraduate school)
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        The UJ Postgraduate School offers regular workshops as well as a diploma
        in Postgraduate Research Supervision:{" "}
        <Link
          href={
            "https://www.uj.ac.za/postgraduate-school/research-capacity-development/postgraduate-diploma-in-research-supervision/"
          }
          target="_blank"
          className="link-primary underline"
        >
          https://www.uj.ac.za/postgraduate-school/research-capacity-development/postgraduate-diploma-in-research-supervision/
        </Link>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        About Postgraduate Diploma in Research Supervision (Taken from the
        Postgraduate School)
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        The University of Johannesburg’s Postgraduate School, in partnership
        with the Faculty of Education, invites you to apply for the Postgraduate
        Diploma in Research Supervision Qualification code E5PRSQ. The purpose
        of this programme is to contribute to the further professionalisation of
        academic staff. Professionalise them by developing the knowledge,
        skills, and dispositions required to successfully supervise postgraduate
        students from registration to graduation. <br />
        <br />
        The programme consists of seven modules, of which six should be
        completed for the diploma. They modules are: Postgraduate Research
        Supervision (compulsory); Academic Literacies in Research Supervision;
        Research Ethics in Postgraduate Supervision; Assessment of Postgraduate
        Research; Supervision of Qualitative Research Design; Supervision of
        Quantitative Research Design and; Current and Emerging Issues in
        Postgraduate Supervision. <br />
        <br />
        If you have any questions, you can email Tebogo Mokgokong, RCD
        Coordinator of the programme in the Postgraduate School, at{" "}
        <Link
          href={"mailto:supervisioncourse@uj.ac.za"}
          className="link-primary underline"
        >
          supervisioncourse@uj.ac.za
        </Link>{" "}
        <br /> <br />
        You are also encouraged to co-supervise with more experienced colleagues
        with good throughput and quality outcomes with their postgraduate
        students.
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        UJ Centres that provide support (Taken from the UJ Sharepoint):
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <Link
          href={
            "https://www.uj.ac.za/postgraduate-school/Pages/statistical-consultation-services.aspx"
          }
          target="_blank"
          className="link-primary underline"
        >
          STATKON
        </Link>{" "}
        offer free quantitative and statistics consultations.
        <br /> <br />
        The <b>library</b> hosts helpful training sessions related to{" "}
        <Link
          href={
            "https://www.uj.ac.za/library/library-services/Pages/online-training.aspx"
          }
          target="_blank"
          className="link-primary underline"
        >
          The information side of research.
        </Link>{" "}
        The library also has resources to{" "}
        <Link
          href={"https://www.uj.ac.za/library/research-support/"}
          target="_blank"
          className="link-primary underline"
        >
          support research.
        </Link>
        <br /> <br />
        The <b>postgraduate school</b> offers regular training opportunities.
        Keep an eye on{" "}
        <Link
          href={
            "https://www.uj.ac.za/postgraduate-school/research-capacity-development/"
          }
          target="_blank"
          className="link-primary underline"
        >
          their website.
        </Link>{" "}
        The RCD can also be contacted at{" "}
        <Link
          href={"mailto:supervisioncourse@uj.ac.za"}
          target="_blank"
          className="link-primary underline"
        >
          supervisioncourse@uj.ac.za
        </Link>{" "}
        for enquiries.
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Additional resources
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <span className="my-5">
          Here are some great articles that can assist you in enhancing your
          postgraduate research supervision skills
        </span>
        <ul className="list-inside list-disc">
          <li>
            <Link
              href={
                "https://www.timeshighereducation.com/campus/research-supervision-working-individual-front-you"
              }
              target="_blank"
              className="btn-link inline-flex  items-center gap-1"
            >
              Research supervision: working with the individual in front of you
            </Link>
          </li>
          <li>
            <span>Alternative approaches to postgraduate supervision</span>
            <Link
              href={
                "https://utfs.io/f/aa3e7fd6-daaa-4184-bdc5-b418599d2e31-audwgs.pdf"
              }
              target="_blank"
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
          <li>
            <span>Co supervision in postgraduate training.</span>
            <Link
              href={
                "https://utfs.io/f/e0973532-4cbb-4458-b5aa-ea233fecdadc-ctli5h.pdf"
              }
              className="btn btn-link inline-flex  items-center gap-1"
            >
              <FaFileDownload />
              Download
            </Link>
          </li>
          <li>
            <span>
              Postgrad supervision An agreed conceptual view of good practice
              article
            </span>
            <Link
              href={
                "https://utfs.io/f/21b72bbc-924a-4635-97b2-630cc6652ab7-5574ea.pdf"
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

export default SupervisionSkills;
