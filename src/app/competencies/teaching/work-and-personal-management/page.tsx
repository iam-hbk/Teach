import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

type Props = {};

const WorkAndPersonalManagement = (props: Props) => {
  return (
    <>
      <h1 className="my-10 text-6xl font-bold uppercase text-teaching">
        Work & Personal Management
      </h1>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline">
        Introduction
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        Regardless of our position at the university, whether a lecturer,
        associate professor or even a full professor, we sometimes struggle to
        juggle and manage our academic responsibilities. Working as an academic
        requires one to manage and deliver on various responsibilities, which
        could include some of the following:
        <ul className="m-4 ml-10 flex list-inside list-image-[url(/assets/start-list-icon.svg)] flex-col gap-3">
          <li>
            Managing time and priorities effectively between your teaching,
            research, postgraduate supervision and community engagement
            responsibilities; sometimes, you may even have a leadership role/s
            and other committee roles to fulfil.
          </li>
          <li>
            Managing your relationships with your undergraduate and postgraduate
            students, your academic peers and colleagues, academic
            administrators, tutors, student assistants, post-doc fellow students
          </li>
          <li>
            Managing the research process of Honours, Masters and PhD students,
            which usually runs over a period varying between one year to four
            years
          </li>
          <li>
            Ensuring that you deliver on your prescribed research output per
            your job level which entails writing articles, conference papers,
            books, book reviews etc.
          </li>
          <li>Beginning or completing your PhD</li>
          <li>
            Meeting your Key Performance Areas Goals as per your performance
            contract every year
          </li>
          <li>
            Managing your development plan for promotion and career advancement
          </li>
          <li>
            Creating and managing your social media profile and information
            (Examples include: Google Scholar, LinkedIn, ResearchGate etc.)
          </li>
          <li>
            Arranging and managing huge research projects that often require
            obtaining funding and working in partnership with other academics
            both locally and globally
          </li>
        </ul>
        The scope and depth of an academic’s work is extensive, requiring many
        skills, effective use of time, and priority management. We commit to
        fulfilling all the above responsibilities to meet UJ’s 4 Key Performance
        Areas, measured yearly. These are:
        <ul className="m-4 ml-10 flex list-inside list-image-[url(/assets/checkmark.svg)] flex-col gap-3">
          <li>Teaching and Innovation;</li>
          <li>Research and Innovation;</li>
          <li>
            Leadership, university administration, enhancement of the
            discipline;
          </li>
          <li>Community and Industrial Involvement</li>
        </ul>
        This section and the resources listed will hopefully aid you in
        enhancing and improving your management and organisational skills to
        fulfil all your key roles in your department within the greater
        university and ultimately within the greater local and global academic
        community.
      </div>

      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        Some tips on how to effectively manage all your academic
        responsibilities
      </div>
      <div className="mb-10 flex flex-col rounded-md bg-base-200/50 p-4">
        <ul className="flex list-inside list-decimal flex-col">
          <li className="m-3 text-base font-bold text-secondary">
            Know what is expected of you at your level and the level above you
          </li>
          Many academics are working towards creating a better work-life balance
          which requires careful consideration and examination of all that one
          does in one’s work, and planning and structuring one’s work tasks
          accordingly. Doing this is not easy, but needs to be done, so that one
          can take care of one’s wellbeing and still work towards fulfilling
          one’s career aspirations.
          <br />
          <br />A good place to begin is to review what is expected of you at
          your respective academic job level. Here, you can go through the{" "}
          <Link
            href={
              "https://utfs.io/f/5c09c38b-de6c-488e-9acf-eeec87b6af3f-uelbdl.pdf"
            }
            target="_blank"
            className="link-primary underline"
          >
            UJ Senate Approved Academic Workload model
          </Link>
          , which provides an academic workload framework with a set of
          principles and guidelines to inform the development of academic
          workload models in faculties and departments at UJ.
          <br />
          <br />
          Use this workload model in discussion with your line manager in your
          respective department; you can plan and negotiate your teaching,
          research, postgraduate supervision and all other responsibilities with
          your manager and peers.
          <br />
          <br />
          Reviewing what will be expected of you at the next level of your
          career is also essential as you plan and manage your work
          responsibilities. This provides a framework to manage and focus on key
          areas that will help you prepare for promotion.
          <li className="m-3 text-base font-bold text-secondary">
            Create a vision board with your career goals for the next 3 to 5
            years and plan for each year
          </li>
          Once you know what you want to achieve in the next 3 to 5 years, and
          the job level which you want to occupy in the next 3 to 5 years, set
          up SMART objectives that you can aim to meet every year that brings
          you closer to living out your career vision and goal. Measure your
          performance outputs against your performance contract and vision board
          every year. As you plan for the following year, review your:
          <ul className="m-4 ml-10 flex list-inside list-image-[url(/assets/checkmark.svg)] flex-col gap-3">
            <li>
              <b>Vision board</b>{" "}
              <Link
                href={
                  "https://www.betterup.com/blog/how-to-create-vision-board"
                }
                target="_blank"
                className="link-primary underline"
              >
                here
              </Link>{" "}
              is a link that will help you get started on the vision board.
            </li>
            <li>
              <b>Performance Contract</b>, which can be accessed via this{" "}
              <Link
                href={"https://bit.ly/33C5kld"}
                target="_blank"
                className="link-primary underline"
              >
                link
              </Link>
            </li>
            <li>
              <b>Curriculum Vitae (CV)</b>, which you can update every quarter
            </li>
            <li>
              <b>CBE Promotions Policy</b> This is the{" "}
              <Link
                href={""}
                target="_blank"
                className="link-primary underline"
              >
                2019 Policy
              </Link>
              . Please ensure that you use the latest policy; you can enquire at
              the CBE’s Executive Secretary’s office
            </li>
            <li>
              <b>UJ’s Academic Calendar</b> and your{" "}
              <b>Department’s Calendar</b> for the following year{" "}
              <span className="text-primary">
                (now plan all your lecturing, research, postgraduate supervision
                and other activities around these two calendars)
              </span>
            </li>
            <li>
              Your <b>personal life goals outside of work</b>
            </li>
          </ul>
          <p className="max-w-2xl self-center rounded-md bg-primary/90 p-3  text-center text-white">
            Remember, if you work with your vision and goals in mind, how you
            work and what you choose to work on becomes more structured,
            clearer, focused and easier to manage.
          </p>
          <li className="m-3 text-base font-bold text-secondary">
            Time &amp; Priority Management for your Personal and Work Life
          </li>
          If you struggle to prioritise your time, energy and effort in your
          work and personal life (such as family time with your spouse and
          children, exercise, raising children, recreation, rest, etc )
          achieving your goals becomes more difficult and it is more likely that
          you will experience stress and overall work and life dissatisfaction.
        </ul>
      </div>

      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        Here are some resources that can help you with your time and priority
        management
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <ul className="flex list-inside flex-col gap-3">
          <li className="flex items-center gap-2">
            What Priority Management Is and How to Use It
            <Link
              href={
                "https://fellow.app/blog/management/what-priority-management-is-and-how-to-use-it/"
              }
              target="_blank"
              className="link-primary underline"
            >
              <LuExternalLink />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            Effective Prioritization and Time Management Strategies
            <Link
              href={
                "https://fellow.app/blog/management/what-priority-management-is-and-how-to-use-it/"
              }
              target="_blank"
              className="link-primary underline"
            >
              <LuExternalLink />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            Time Management is Priority Management
            <Link
              href={
                "https://fellow.app/blog/management/what-priority-management-is-and-how-to-use-it/"
              }
              target="_blank"
              className="link-primary underline"
            >
              <LuExternalLink />
            </Link>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        Ressources that can help you navigate your academic career
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        <ul className="flex list-inside flex-col gap-3">
          <li className="flex items-center gap-2">
            An academic career
            <Link
              href={
                "https://www.ed.ac.uk/careers/students/postgraduates/phd-students/discover-what-s-out-there/an-academic-career"
              }
              target="_blank"
              className="link-primary underline"
            >
              <LuExternalLink />
            </Link>
          </li>
          <li className="flex items-center gap-2">
            Strategies for understanding and navigating the “academic underlife”
            <Link
              href={
                "https://www.universityaffairs.ca/career-advice/career-advice-article/strategies-understanding-navigating-academic-underlife/"
              }
              target="_blank"
              className="link-primary underline"
            >
              <LuExternalLink />
            </Link>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        Recommended Books &amp; literature
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        McDonnell, J.J (2019).{" "}
        <em className="font-light text-primary">
          Navigating an Academic Career: A Brief Guide for PhD Students,
          Postdocs, and New Faculty
        </em>
        , American Geophysical Union, ISBN: 978-1-119-64217-6
        <br />
        <br />
        <div className="flex items-center gap-2">
          15 of the Best Time Management and Productivity Books of All Time
          <Link
            href={
              "https://www.entrepreneur.com/living/15-of-the-best-time-management-and-productivity-books-of/329378"
            }
            target="_blank"
            className="link-primary underline"
          >
            <LuExternalLink />
          </Link>
        </div>
      </div>

      <div className="cursor-pointer text-2xl capitalize text-teaching hover:underline ">
        UJ Centre that promotes academic development
      </div>
      <div className="mb-10 rounded-md bg-base-200/50 p-4">
        The <b>Centre for Academic Staff Development (CASD)</b> (you can access
        on the UJ Sharepoint under the Division of Excellence) at UJ plays an
        essential role in providing opportunities for staff (who are
        disciplinary experts) and tutors to develop their educational expertise
        in order to become better facilitators of learning. It does this by
        offering the following: <br />
        <br />
        <ul className="flex ml-10 list-inside list-image-[url(/assets/start-list-icon.svg)] flex-col gap-3">
          <li>
            Postgraduate Diploma in Higher Education - a formal qualification
            for academics in the post- school environment
          </li>
          <li>
            Academic Preparation Programme - a semester-long programme for staff
            new to UJ
          </li>
          <li>
            Professional Development Workshops – provide opportunities for
            academics to develops in various areas of teaching and learning
          </li>
          <li>
            Tutor Development – a College Reading and Learning Association
            (CRLA) approved tutor training programme for tutors and senior
            tutors
          </li>
          <li>
            Teaching Portfolio Development – support for applicants seeking
            promotion and / or teaching awards
          </li>
          <li>
            Scholarship of Teaching and Learning (SOTL) – support for the
            development of research in Teaching and Learning
          </li>
          <li>
            Teaching and Module Evaluations – administration of evaluations, and
            support for academic staff emerging from feedback obtained
          </li>
          <li>
            Peer evaluation – support for academic staff undertaking peer
            evaluations
          </li>
          <li>
            Development of Academic Heads of Department – workshops for newly
            appointed Heads of Department
          </li>
        </ul>
      </div>
    </>
  );
};

export default WorkAndPersonalManagement;
