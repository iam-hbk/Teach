const data = [
  {
    title: "Assessments",
    color: "#D0411F",
    link: "/assessments",
    subSegments: [
      {
        title: "Designing & Developing Assessments",
        link: "/assessments/designing-and-developing-assessments",
        color: "#D0411F",
      },
      {
        title: "Assessment Methods & Activities",
        link: "/assessments/assessment-methods-and-activities",
        color: "#D55A3C",
      },
      {
        title: "Plan Conduct & Manage The Assessment Process",
        link: "/assessments/planning-conducting-and-managing-assessments",
        color: "#DA735A",
      },
      {
        title: "Moderation",
        link: "/assessments/moderation",
        color: "#DF8C77",
      },
    ],
  },
  {
    title: "Commitment",
    color: "#6C4388",
    link: "/commitment-caring",
    subSegments: [
      {
        title: "Personal Growth",
        link: "/commitment-care/personal-growth",
        color: "#6C4388",
      },
      {
        title: "Student support",
        link: "/commitment-care/student-support",
        color: "#7B5B9A",
      },
      {
        title: "Colleagues",
        link: "/commitment-care/colleagues",
        color: "#998ABF",
      },
      {
        title: "Professional Bodies",
        link: "/commitment-care/professional-bodies",
        color: "#A8A1D1",
      },
      {
        title: "Organisation / Industry",
        link: "/commitment-care/organisation-industry",
        color: "#B7B9E4",
      },
    ],
  },
  {
    title: "Higher Education",
    color: "#2C2A2B",
    link: "/higher-education",
    subSegments: [
      {
        title: "Departmental",
        link: "/higher-education/departmental",
        color: "#454344",
      },
      {
        title: "College Faculty",
        link: "/higher-education/college-faculty",
        color: "#5E5C5D",
      },
      {
        title: "University of Johannesburg",
        link: "/higher-education/uj",
        color: "#777576",
      },
      {
        title: "South African Universities",
        link: "/higher-education/south-african-universities",
        color: "#908E8F",
      },
      {
        title: "Council on Higher Education & SAQA",
        link: "/higher-education/well-being",
        color: "#A9A7A8",
      },
      {
        title: "Africa and International Context",
        link: "/higher-education/africa-and-international-context",
        color: "#C2C0C1",
      },
    ],
  },
  {
    title: "Teaching",
    color: "#0553B6",
    link: "/teaching",
    subSegments: [
      {
        title: "Supervision Skills",
        link: "/teaching/supervision-skills",
        color: "#0553B6",
      },
      {
        title: "Teaching Philosophy",
        link: "/teaching/your-teaching-philosophy",
        color: "#1C6CD9",
      },
      {
        title: "Designing Learning Programmes & Modules",
        link: "/teaching/designing-learning-programmes-and-modules",
        color: "#3385FC",
      },
      {
        title: "Incorporating Work Integrated Learning",
        link: "/teaching/incorporating-work-integrated-learning",
        color: "#4A9DFF",
      },
      {
        title: "Classroom & Online-Based Teaching",
        link: "/teaching/classroom-and-online-based-teaching",
        color: "#62B5FF",
      },
      {
        title: "Management & Organisational Skills",
        link: "/teaching/management-and-organisational-skills",
        color: "#79CDFF",
      },
      {
        title: "Tutor Usage",
        link: "/teaching/technology-integration",
        color: "#91E5FF",
      },
    ],
  },

  {
    title: "Expertise",
    color: "#4EAA55",
    link: "/expertise",
    subSegments: [
      {
        title: "Subject Matter Expertise",
        link: "/expertise/subject-matter-expertise",
        color: "#5EB566",
      },
      {
        title: "Work Related Experience & Partnerships",
        link: "/expertise/work-related-experience-and-partnerships",
        color: "#6EC078",
      },
      {
        title: "Research Knowledge & Skills",
        link: "/expertise/research-knowledge-and-skills",
        color: "#7ECB89",
      },
    ],
  },
];
export type TWheelData = typeof data;
export type TWheelSegment = typeof data[0];
export type TWheelSubSegment = typeof data[0]["subSegments"][0];
export default data;
