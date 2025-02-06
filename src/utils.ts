export const Expeirences_CV: Expeirences_CV_T[] = [
  {
    company: "Freelance",
    startDate: "JUN 2024",
    endDate: "CURRENT",
    where: "Berlin, Germany",
    position: "Frontend Engineer (WEB)",
    companyDescription:
      "Freelancing as a frontend engineer at CLIQup, based in Berlin.",
    bullets: [
      "Collaborative Problem-Solving: Took ownership of key technical challenges by proactively collaborating with cross- functional teams (CTO, PM, Backend engineers, and Designers) to resolve critical issues.",
      "Resolved deployment failures by diagnosing critical issues, facilitating discussions with the CTO and PM, and ensuring clear documentation for future stability.",
      "Resolved a UX issue in the ticket booking flow by redesigning the process with PM and Designers for a more intuitive user experience. Technically, I refactored modal controls to ensure smooth interactions and improve flow efficiency.",
      "Code Review & Maintainability: Took responsibility for the frontend code reviews focusing on edge cases and maintainability. Ensured high-quality code by catching edge cases early, minimizing post-release hotfixes.",
    ],
  },
  {
    company: "Hnine",
    startDate: "MAR 2021",
    endDate: "SEP 2023",
    where: "Seoul, South Korea",
    position: "Frontend Developer, R&D team",
    companyDescription: "Software Development Company",
    bullets: [
      "Task Management & Efficiency: Led the frontend team in sprint planning and task prioritization using Jira, guiding two junior developers and identifying bottlenecks to ensure the team focused on the most critical issues. This leadership approach optimized workflows, enhanced project efficiency, and improved cross-department communication.",
      "Problem Solving through Optimization: Identified and optimized a critical function that was causing significant delays, reducing its execution time from 2.03s to 0.027s (74x). This improvement is expected to reduce Interaction to Next Paint (INP) significantly, leading to smoother performance and a better user experience.",
      "Mentoring & Onboarding: Led pair programming and owned the onboarding process for junior developers, designing a structured training plan, fostering continuous learning, and guiding complex problem-solving.",
      "Worked across various industries, developing the ability to gather requirements and define key milestones for successful project delivery.",
      "Prioritized tasks effectively based on urgency, consistently meeting deadlines while maintaining accountability and high- quality output.",
      "Collaborated with cross-functional teams, enhancing problem-solving skills and adapting to diverse perspectives within the team.",
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
  bullets: string[];
}
