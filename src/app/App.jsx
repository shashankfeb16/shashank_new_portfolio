import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
// import cv from "../assets/files/Shashank-Nath-resume.pdf";
import cv from "../assets/files/Shashank-Nath-Resume.pdf";

// import icons
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { DiNodejs, DiDjango } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { FaBitbucket, FaJira } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";

//import images
import Hound from "../assets/images/Hound_Image.png";
import Timely from "../assets/images/Timely_Image.png";
import ProfilePic from "../assets/images/profile.png";

// import style
import style from "./App.module.css";
import clsx from "clsx";

// const skills = [
//   {
//     name: "ReactJS",
//     icon: <FaReact size="25px" color="white" />,
//     cssName: "react",
//   },
//   {
//     name: "Redux",
//     icon: <BiLogoRedux size="25px" color="white" />,
//     cssName: "redux",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: <BiLogoCss3 size="25px" color="white" />,
//     cssName: "css",
//   },
//   {
//     name: "HTML",
//     icon: <AiFillHtml5 size="25px" color="white" />,
//     cssName: "html",
//   },
//   {
//     name: "CSS/SASS",
//     icon: <BiLogoCss3 size="25px" color="white" />,
//     cssName: "css",
//   },
//   {
//     name: "JavaScript",
//     icon: <BiLogoJavascript size="25px" color="white" />,
//     cssName: "java-script",
//   },
//   {
//     name: "HighCharts",
//     icon: <BiBarChart size="25px" color="white" />,
//     cssName: "java",
//   },
//   {
//     name: "Material UI",
//     icon: <SiMui size="25px" color="white" />,
//     cssName: "facebook",
//   },
//   {
//     name: "NodeJS",
//     icon: <DiNodejs size="25px" color="white" />,
//     cssName: "java-script",
//   },
//   {
//     name: "ExpressJS",
//     icon: <SiExpress size="25px" color="white" />,
//     cssName: "gmail",
//   },
//   {
//     name: "Django",
//     icon: <DiDjango size="25px" color="white" />,
//     cssName: "type-script",
//   },
//   {
//     name: "Git",
//     icon: <BsGit size="25px" color="white" />,
//     cssName: "git",
//   },
//   {
//     name: "Bitbucket DevOps",
//     icon: <FaBitbucket size="25px" color="white" />,
//     cssName: "recoil",
//   },
//   {
//     name: "Jira",
//     icon: <FaJira size="25px" color="white" />,
//     cssName: "react-query",
//   },
//   {
//     name: "RESTful APIs",
//     icon: <TbApi size="25px" color="white" />,
//     cssName: "react",
//   },
// ];

const heroSkills = [
  { name: "React", icon: <FaReact size="48px" color="var(--primary-main)" /> },
  {
    name: "Redux",
    icon: <BiLogoRedux size="48px" color="var(--primary-main)" />,
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript size="48px" color="var(--primary-main)" />,
  },
  {
    name: "NodeJS",
    icon: <DiNodejs size="48px" color="var(--primary-main)" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size="48px" color="var(--primary-main)" />,
  },
  {
    name: "Django",
    icon: <DiDjango size="48px" color="var(--primary-main)" />,
  },
  {
    name: "Material UI",
    icon: <SiMui size="48px" color="var(--primary-main)" />,
  },
  { name: "Git", icon: <BsGit size="48px" color="var(--primary-main)" /> },
  {
    name: "Bitbucket",
    icon: <FaBitbucket size="48px" color="var(--primary-main)" />,
  },
  { name: "Jira", icon: <FaJira size="48px" color="var(--primary-main)" /> },
  {
    name: "REST APIs",
    icon: <TbApi size="48px" color="var(--primary-main)" />,
  },
  {
    name: "HTML5",
    icon: <AiFillHtml5 size="48px" color="var(--primary-main)" />,
  },
  {
    name: "CSS3",
    icon: <BiLogoCss3 size="48px" color="var(--primary-main)" />,
  },
];

const projects = [
  {
    name: "HOUND Blog Application",
    link: "https://hound-frontend-service.vercel.app/",
    github: "https://github.com/shashankfeb16/HOUND_FRONTEND",
    description:
      "A full-stack blog platform built with the MERN stack (MongoDB, Express, React, and Node.js). Users can create, edit, and delete blogs, and interact with content by liking and commenting. The platform also features a social aspect, allowing users to follow other authors To provide a rich user experience, I integrated Highcharts to present user-specific analytics. A pie chart visualizes a user's followers and following count, while a monthly bar chart tracks their total likes and comments. This project demonstrates my ability to build a comprehensive, full-stack application with a focus on interactive features and data visualization.",
    image: Hound,
  },
  {
    name: `Timely Clone`,
    link: "https://timely-clone.netlify.app/",
    github: "https://github.com/riyagshah/Timelyapp",
    description:
      "Timelyapp is centralized automated system that makes it easy for teams to work on all aspects of their programs and projects to ensure efficiency and productivity Timely helps in Log work hours, track project time and create weekly timesheets with automatic time tracking.",
    image: Timely,
  },
];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      emailjs
        .sendForm(
          "service_b03dyxp",
          "template_5gk0kw5",
          form.current,
          "BH4aS8vM7zKyYE1Kn"
        )
        .then(() => {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
        });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Shashank Nath</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            htmlFor="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <img src={ProfilePic} alt="Profile" className={style.profilePic} />
          <h1>HEY, I&apos;M Shashank Nath</h1>
          <p>
            Highly adaptable Full Stack Developer with 2 years and 9 months of
            experience in React JS, Node.js, and Git. Proficient in end-to-end
            web application development, unit testing, and issue resolution,
            consistently delivering efficient and scalable solutions that
            optimize system functionality and user experience.
          </p>
          <div className={style["home-actions"]}>
            <a href={cv} target="_blank" rel="noreferrer">
              <DownloadButton>View CV</DownloadButton>
            </a>
            {/* <a href={cv} download="Shashank-Nath-Resume.pdf">
              <DownloadButton>Download CV</DownloadButton>
            </a> */}
          </div>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shashankfeb16"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shashank-nath-9b8970147/"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail}
            target="_blank"
            rel="noreferrer"
            href="mailto:shashankfeb16@gmail.com?subject=SendMail&body=Description"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
          {/* <a
            className={style.facebook}
            target="_blank"
            href="https://www.facebook.com/ibrahim.hiarea"
          >
            <BsFacebook size="30px" color="black" />
          </a> */}
        </div>
      </div>

      {/* About */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Get to know me!</h3>
              <p>
                I&apos;m a Highly adaptable Full Stack Developer with 2 years
                and 9 months of experience. I am proficient in end-to-end web
                application development, unit testing, and issue resolution,
                consistently delivering efficient and scalable solutions that
                optimize system functionality and user experience. I have led
                end-to-end development of scalable solutions, integrating
                RESTful APIs and using PostgreSQL and MongoDB queries for
                database systems to streamline data processing. I also apply
                debugging techniques to identify and resolve software issues.
              </p>
            </div>
            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style["skills-hero"]}>
                {heroSkills.map((skill, index) => (
                  <div
                    key={`hero-skill-${index}`}
                    className={style["skill-card"]}
                  >
                    <div className={style["skill-card-icon"]}>{skill.icon}</div>
                    <div className={style["skill-card-name"]}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Projects</h2>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
          <div className={style["projects-list"]}>
            {projects.map((project, index) => {
              return (
                <div key={`project${index}`} className={style.project}>
                  <div className={style["project-image"]}>
                    <img src={project.image} alt="Project Image" />
                  </div>
                  <div className={style["project-info"]}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={style["project-buttons"]}>
                      <IconButton
                        width="170px"
                        height="50px"
                        backgroundColor="var(--primary-main)"
                        color="white"
                        link={project.link}
                        icon={<AiOutlineEye size="25px" color="white" />}
                      >
                        Live Demo
                      </IconButton>
                      <IconButton
                        width="100px"
                        height="50px"
                        backgroundColor="black"
                        color="white"
                        link={project.github}
                        icon={<AiFillGithub size="25px" color="white" />}
                      >
                        Github
                      </IconButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="250px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3>Shashank Nath</h3>
              <p>
                A full stack developer dedicated to building robust and scalable
                web applications, from user-friendly front-ends to powerful
                back-ends, ensuring the success of the overall project.
              </p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shashankfeb16"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/shashank-nath-9b8970147/"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  className={style.gmail}
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:shashankfeb16@gmail.com?subject=SendMail&body=Description"
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
                {/* <a
                  className={style.facebook}
                  target="_blank"
                  href="https://www.facebook.com/ibrahim.hiarea"
                >
                  <BsFacebook size="30px" color="white" />
                </a> */}
              </div>
            </div>
          </div>
          {/* <div className={style["copy-right"]}>
            © Copyright 2023. Made by <span>Ibrahim Hiarea</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
