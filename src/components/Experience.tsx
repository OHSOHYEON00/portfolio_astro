import React from "react";

function ExperienceItem({
  logo,
  position,
  name,
  location,
  period,
  logoStyle,
}: {
  logo: any;
  position: string;
  name: string;
  location: string;
  period: string;
  logoStyle: string;
}) {
  return (
    <article className="grid md:grid-cols-[auto_0.8fr_0.5fr_0.5fr] grid-cols-[1fr] border-l-[1px] border-slate-300 pl-10">
      <img
        src={logo}
        alt={"logo"}
        height={12}
        className={`${logoStyle} mr-16 self-center`}
      />
      <div>
        <p className="font-semibold">{position}</p>
        <p className="text-sm">{name}</p>
      </div>

      <p className="text-sm text-slate-400">{location}</p>
      <p className="md:text-sm text-xs text-slate-600 justify-self-end">
        {period}
      </p>
    </article>
  );
}

function Experience() {
  return (
    <>
      <ExperienceItem
        logo={"/public/images/cliqupLogo.png"}
        position={"Frontend Engineer"}
        name={"CLIQup"}
        location={"Berlin, Germany"}
        period={"JUN 2024 - CURRENT"}
        logoStyle={"h-9 w-auto p-1"}
      />

      <ExperienceItem
        logo={"/public/images/hnineLogo.png"}
        position={"Frontend Engineer, R&D team"}
        name={"HNINE"}
        location={"Seoul, South Korea"}
        period={"MAR 2021 - SEP 2023"}
        logoStyle={"w-7 h-auto"}
      />
    </>
  );
}

export default Experience;
