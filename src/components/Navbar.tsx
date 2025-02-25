import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";

const socials = [
  // {
  //   name: "Github",
  //   url: "https://github.com/slydragonn",
  //   icon: FaGithub,
  // },
  // {
  //   name: "DEV",
  //   url: "https://dev.to/slydragonn",
  //   icon: FaDev,
  // },
  // {
  //   name: "Projects",
  //   url: "https://www.linkedin.com/in/sohyeonoh/",
  //   icon: FaLinkedin,
  // },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sohyeonoh/",
    icon: FaLinkedin,
  },
];

const Navbar = () => {
  return (
    <nav className="z-40 fixed top-5 left-0 right-0 my-0 mx-auto max-w-max px-5 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl ">
        {socials.map((social, index) => (
          <li key={index} className="hover:scale-90 duration-150">
            <a href={social.url} target="_blank" rel="noreferrer">
              <social.icon />
            </a>
          </li>
        ))}
        <li>
          <a
            href={"#projects"}
            className="text-xs"
            target="_parent"
            rel="noreferrer"
          >
            <div>Projects</div>
          </a>
        </li>
        <li>
          <a href={"/cv"} className="text-xs" target="_parent" rel="noreferrer">
            <div>CV</div>
          </a>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
