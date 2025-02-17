export const Expeirences_CV: Expeirences_CV_T[] = [
  {
    company: "CLIQup",
    startDate: "JUN 2024",
    endDate: "CURRENT",
    where: "Berlin, Germany",
    position: "Frontend Engineer (WEB)",
    companyDescription:
      "CLIQup is a social platform that helps users plan small get-togethers with people nearby, make new friends, and discover different activities and events in the city.",
    bullets: [
      "Implementation the payment fulaillment process of the booking system, including reservation completion and PDF ticket generation using Next.js.",
      "Intergrating dynamic data using GraphQL to optimise content delivery, collaborating in cross-functional team.",
      "Guided junior developers through pair programming to improve code quality. Identiaied and resolved issues in modal data management early in the event booking alow, preventing data loss and reducing bugs.",
    ],
  },
  {
    company: "Hnine",
    startDate: "MAR 2021",
    endDate: "SEP 2023",
    where: "Seoul, South Korea",
    position: "Frontend Developer, R&D team",
    companyDescription:
      "HNINE is a digital product studio based in Seoul, specializing in service planning, UX/UI design, and digital product development to deliver innovative user experiences through technology.",
    projects: [
      {
        name: "VRTX",
        period: "JAN 2023 - SEP 2023",
        desc: "A content-based community for game users that aims to become the catalyst for the mass adoption of GameFi (Web3).",
        detailTitle: [
          "Phase 1: Initial Development & Launch",
          "Phase 2: Service Optimization & Feature Enhancement",
        ],
        details: [
          [
            "Implemented Next.js and optimised rendering strategies (ISR, CSR) to improve SEO and page load speed.",
            "Developed the main content feed with a alexible ranking system that allows administrators to control the order of different types of posts (user posts, ads, promotions, recommendations) while ensuring dynamic content updates.",
            "Integrated Sentry for real-time error tracking and designed an error boundary system, ensuring application stability and preparing the project for efaicient issue detection and resolution in future development cycles.",
            "Optimised frontend performance with virtualised components, reducing DOM elements for smoother scrolling and better efaiciency with large datasets.",
          ],
          [
            "Led frontend development for both user-facing service and admin back-ofaice during service upgrade sprints, driving sprint planning and task prioritization. Mentored two junior developers and ensured smooth feature deployment.",
            "Innovatively enhanced INP on calendar page by 98% by replacing external date library with a native JavaScript Date object, eliminating timezone calculation inefaiciencies.",
            "Successfully integrated Web3 functionality with crypto wallet connectivity and loyalty features.",
          ],
        ],
      },
      {
        name: "Location-based map editor, Back office",
        period: "JUL 2022 - DEC 2022",
        desc: "An Indoor positioning SVG based map editor aimed at enhancing location based marketing strategies.",
        details: [
          [
            "Led full-cycle development of a canvas-based admin tool, working solo while collaborating directly with stakeholders to reaine UX and functionality.",
            "Designed an event-driven architecture, separating business logic from canvas control using the Singleton pattern, enabling alexible updates and reducing maintenance complexity.",
            "Pre-structured component and event control systems, accelerating delivery by 15%, reducing unexpected rework, and ensuring smoother collaboration with stakeholders.",
          ],
        ],
      },
    ],
  },
];

export const Education_CV = {
  title: "Bachelor of Computer Engineering",
  where: "Seoul, South Korea",
  org: "Sejong University",
  startDate: "MAR 2015",
  endDate: "AUG 2020",
};

interface Expeirences_CV_T {
  company: string;
  startDate: string;
  endDate: string;
  where: string;
  position: string;
  companyDescription?: string;
  bullets?: string[];
  projects?: Array<{
    name: string;
    period: string;
    desc?: string;
    details: Array<string[]>;
    detailTitle?: string[];
  }>;
}
