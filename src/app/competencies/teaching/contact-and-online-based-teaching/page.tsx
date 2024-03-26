import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";

type Props = {};

const ContactAndOnlineBasedTeaching = (props: Props) => {
  return (
    <>
      <h1 className="my-10 text-6xl font-bold uppercase text-teaching">
        Contact &amp; Online-Based Teaching
      </h1>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Introduction
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        UJ follows a blended learning approach. According to UJ’s{" "}
        <Link
          target="_blank"
          className="link-primary underline"
          href={
            "https://utfs.io/f/fd544439-bdd8-4498-8755-9daca923dce3-om5bcs.pdf"
          }
        >
          Academic Programme Policy Senate
        </Link>{" "}
        <b>blended learning</b> is contact learning with some distance- based
        online support. For example, face-to-face teaching methods are used with
        technologically mediated materials, learning activities, educational
        software, and print materials. <br />
        <br />
        Many of us have had much more exposure to online teaching due to the
        COVID-19 pandemic. Now, we follow a more blended hybrid teaching model
        encompassing contact and online teaching elements.
      </div>

      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        What are the components of good contact and online lecturing that
        facilitate learning?
      </div>
      <div className="mb-10 flex flex-col rounded-md bg-base-200/50 p-4">
        To ensure that you are adequately preparing for all your lectures
        whether they be contact or face-to- face, it is good to remind yourself
        of UJ’s principles which outline the University’s commitment to
        fostering excellence in teaching and learning and apply equally to all
        teaching and learning activities. Here is the link to{" "}
        <Link
          href={
            "https://utfs.io/f/a7e6763f-20f3-4ad1-abd7-4df9ca16671c-yoo0ok.pdf"
          }
          target="_blank"
          className="link-primary underline"
        >
          UJ Teaching &amp; Learning Policy
        </Link>
        <br />
        <br />
        The following sections provide different tips on how to enhance student
        learning – the respective books are listed below under the Books/Guides
        section:
        <p className="my-5 text-lg text-teaching underline">
          7 Aspects that are considered essential for student learning:
        </p>
        Do your lectures incorporate these 7 aspects that are considered
        essential for student learning (Entwistle, 2000)
        <Image
          src={"/assets/teaching-contact-online-based-teaching-7-concepts.png"}
          height={400}
          width={400}
          alt="7 Aspects that are considered essential for student learning"
          className="m-5 h-[200px] w-auto self-center"
        />
        <p className="mb-3 mt-5 text-lg text-teaching underline">
          Learner-centred teaching
        </p>
        <ul className="ml-10 list-inside list-disc">
          <li>The Balance of Power</li>
          <li>The Function of Content</li>
          <li>The Role of the Teacher</li>
          <li>The Responsibility of Learning</li>
          <li>The Purposes and Processes of Evaluation</li>
        </ul>
        <p className="mt-3">
          The <b>Australian Learning and Teaching Council Awards (2008)</b>{" "}
          refer to the following as essential aspects of lecturing:
        </p>
        <ul className="m-2 ml-10 flex list-inside list-image-[url(/assets/checkmark.svg)] flex-col gap-3">
          <li>Are my students actively engaged in learning?</li>
          <li>Am I building on my students’ prior knowledge and experience?</li>
          <li>
            Are my teaching practices catering for student diversity? Does it
            cater for:{" "}
            <ul className="ml-16 list-inside list-image-[url(/assets/hollow-list-icon.svg)]">
              <li>the different learning needs and styles,</li>
              <li>building confidence,</li>
              <li>encouraging self-directed learning,</li>
              <li>balancing discursive and didactic strategies</li>
              <li>balancing between challenging and supporting students</li>
              <li>cultural diversity</li>
            </ul>
          </li>
          <li>
            Are my students encouraged to develop and expand their conceptual
            understanding?
          </li>
          <li>
            Am I actively making my students aware of key learning outcomes?
          </li>
          <li>Do I actively link research and teaching?</li>
          <li>Do I present the content logically?</li>
          <li>Are my learning outcomes and presentation information linked?</li>
          <li>
            Do I seek feedback on my student’s understanding and act on this
            accordingly?
          </li>
          <li>
            Do I use student discussions and student-to-student interactive
            sessions in my lectures?
          </li>
        </ul>
      </div>

      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        Additional resources
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <ul className="flex list-inside list-none flex-col gap-3">
          <li>
            Massachusetts Institute of Technology (MIT){" "}
            <Link
              href={"http://tll.mit.edu/help/teaching-materials"}
              target="_blank"
              className="link-primary underline"
            >
              Teaching and Learning Laboratory
            </Link>
          </li>
          <li>
            <Link
              href={"https://teachingandlearninginhighered.org"}
              target="_blank"
              className="link-primary underline"
            >
              Derek Bok Centre for Teaching and Learning
            </Link>{" "}
            - Harvard University
          </li>
          <li>
            <Link
              href={"#"}
              // target="_blank"
              className="link-primary underline"
            >
              Bain, K. (2004). What the Best College Teachers Do. <br />
              ..\HETLReviewVolume2Article1 What the best college teachers do
              Bain interview.pdf
            </Link>{" "}
            - Cambridge MA: Harvard University Press
          </li>
        </ul>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        Book/Guides
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <ul className="ml-16 mt-4 flex list-inside list-disc flex-col gap-3">
          <li>
            Marshall, S. (2020). A Handbook for Teaching and Learning in Higher
            Education, 5 th ed. Routledge
          </li>
          <li>
            Refer to Ken Bain’s What do the Best College Teachers Do as an
            excellent resource to enhance your teaching.
          </li>
          <li>
            Entwistle, N.J. (2000). Approaches to Studying and Levels of
            understanding: The Influences of Teaching and Assessment. In Higher
            Education: Handbook of Theory and Research, Vol 15, ed. J.C.Smart.
            New York: Agathon Press
          </li>
          <li>
            Weimer, M. (2002).
            <Link
              href={
                "https://utfs.io/f/5622d401-6215-480d-80ac-2ca42fe01df2-samw3k.pdf"
              }
              target="_blank"
              className="link-primary underline"
            >
              Learner- Centered Teaching. Five Key Changes to Practice.
            </Link>{" "}
            San Francisco: Jossey- Bass, John Wiley &amp; Sons, Inc.
          </li>
        </ul>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        UJ Ressources
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <p>
          UJ has many divisions that provide support and training in all areas
          of contact and online teaching.
        </p>
        <p>Here are some:</p>
        <ul className="ml-16 mt-4 flex list-inside list-disc flex-col gap-3">
          <li>
            <b>Centre for Academic Technologies (CAT)</b> - they provide support
            for online teaching and learning through lectures and seminars on
            how to use Blackboard, setting up collaboration for lectures,
            holistic teaching and learning presence and many more. They also
            provide online support to set up learning modules on Blackboard.
            They can be contacted at{" "}
            <Link
              href={"mailto:catonline@uj.ac.za"}
              target="_blank"
              className="link-primary underline"
            >
              catonline@uj.ac.za
            </Link>
          </li>
          <li>
            <b>Division of Teaching Excellence (DoTE)</b> - they provide
            lectures and seminars on learning with technology, working with
            tutors, innovation in teaching and many more topics. They also cover
            several masterclasses on topics like sustainable development,
            community engagement, and politics of language. Here is their email
            address:{" "}
            <Link
              target="_blank"
              className="link-primary underline"
              href={"mailto:dote@uj.ac.za"}
            >
              dote@uj.ac.za
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactAndOnlineBasedTeaching;
