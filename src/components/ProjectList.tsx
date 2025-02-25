import React, { useEffect, useRef, useState, type ReactElement } from "react";

interface ProjectT {
  name: string;
  subName?: string;
  description: ReactElement;
  techs: string[];
  image?: string;
  link?: string;
  emphasizeColor: string;
}
const projects: ProjectT[] = [
  {
    name: "Vortex Gaming",
    subName: "Service Optimization & Feature Enhancement",
    description: (
      <p>
        A gamified gaming community for Vortex Gaming, where users earn NFT
        rewards and points through missions, encouraging content creation.
        <br />
        <br /> Led frontend development for both user and admin platforms,
        improved calendar performance by 98%, and integrated Web3 wallet support
        for seamless crypto transactions.
      </p>
    ),
    techs: ["Next.js, Typescript, Sentry, Cypress, React-Query"],
    image: "/public/images/vrtx_present_mobile.png",
    emphasizeColor: "group-hover:text-[#ca145d]",
    link: "https://vortexgaming.io/en",
  },
  {
    name: "Vortex Gaming",
    techs: ["Next.js, Typescript, Sentry, React-Query"],
    image: "/public/images/vrtx_present.png",
    description: (
      <p>
        A global gaming community platform for Vortex Gaming, enabling seamless
        interaction through a gamer-friendly interface and hashtag-based search.
        <br />
        <br />
        Led frontend development with Next.js, optimizing SEO and load speed,
        implementing a dynamic content feed with admin-controlled ranking, and
        enhancing performance with virtualized components for smooth scrolling.
      </p>
    ),
    emphasizeColor: "group-hover:text-[#ff6c79]",
    link: "https://vortexgaming.io/en",
  },
  {
    name: "Location-based map editor, Back office",
    techs: ["React, Typescript, React-Query"],
    description: (
      <p>
        Developed an SVG-based indoor positioning map editor to enhance
        location-based marketing, implementing a canvas-based admin tool with an
        event-driven architecture for better maintainability. <br />
        <br />
        Led the full development cycle solo, from requirements to deployment,
        optimizing workflows and structuring systems to accelerate delivery and
        reduce complexity.
      </p>
    ),
    emphasizeColor: "group-hover:text-[#eed21b]",
  },
  {
    name: "National museum of Korea Backoffice renewal project, SaaS",
    techs: ["React, Typescript, Antd UI"],
    image: "/public/images/national_museum_dashboard.png",
    description: (
      <p>
        Revamped and unified the platform for the education services across the
        National Museum of Korea and its 13 branches, along with redesigning the
        admin site to streamline the workflow for managing educational content
        and user applications. <br />
        <br />I led the development of reusable React components for essential
        admin features, including the education program creation and applicant
        management sections, ensuring efficiency and consistency while
        accelerating project delivery.
      </p>
    ),
    emphasizeColor: "group-hover:text-[#8a4ae5]",
  },
  {
    name: "Cracker9",
    techs: ["React.js, TypeScript, Jest"],
    image: "/public/images/vrtx_present.png",
    description: (
      <p>
        Cracker9 is a design communication tool that helps designers and
        developers share style information accurately and efficiently. <br />
        <br />I developed a CSS snippet generator for Sketch/XD, improved
        gradient calculations, optimized parsing performance, and enhanced
        usability through user research and testing.
      </p>
    ),
    emphasizeColor: "group-hover:text-[#3eff9b]",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  index: number;
  project: ProjectT;
}) => {
  const projectRef = useRef(null);
  const [threshold, setThreshold] = useState(0.5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.remove("animate-fade-out-down");
            setThreshold(0.3);
          } else {
            entry.target.classList.remove("animate-fade-in-up");
            entry.target.classList.add("animate-fade-out-down");
            entry.target.classList.add("opacity-0");

            setThreshold(0.5);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [threshold]);

  return (
    <article
      ref={projectRef}
      className={`${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } my-10 flex gap-16 border-t-[1px] group border-slate-200 pt-12 pb-6  `}
    >
      <div className="opacity-50 group-hover:opacity-100 transition-opacity">
        <p
          className={`text-lg font-medium ${project.emphasizeColor} transition-colors`}
        >
          {project.name}{" "}
          {project.subName && (
            <span className="text-sm">- {project.subName}</span>
          )}
        </p>

        <p className="text-sm mt-4">{project.description}</p>
      </div>
      <div className="flex items-center">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.name} present`}
            className={
              "rounded-lg drop-shadow-xl shadow-2xl min-w-2x opacity-50 group-hover:opacity-100 max-w-2xs h-auto group-hover:scale-110 transition-all"
            }
          />
        )}
      </div>
    </article>
  );
};

const ProjectList = () => {
  return (
    <section className="w-full text-slate-600">
      {projects.map((project, index) => {
        return <ProjectCard project={project} index={index} />;
      })}
    </section>
  );
};

export default ProjectList;
