import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chester Rey Tan",
  initials: "CT",
  location: "Quezon City, Philippines",
  locationLink: "https://www.google.com/maps/place/QuezonCity",
  about:
    "Highly motivated and technically skilled Software Developer with a strong foundation in web development",
  summary:
    "I am a highly motivated and technically skilled Software Developer with a strong foundation in web development. I am passionate about learning new technologies and applying them to solve real-world problems. I am always looking for new opportunities to grow and improve my skills.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72215443?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "chestertan321@gmail.com",
    tel: "+639171529122",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/chesterrey",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chester-rey-tan-b770a522a/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Ateneo de Manila University",
      degree: "Bachelor of Science in Computer Science",
      start: "2020",
      end: "2024",
    },
    {
      school: "Zamboanga Chong Hua High School",
      degree:
        "Senior High School: Science, Technology, Engineering, and Mathematics",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Ateneo Laboratory for Intelligent Visual Environments",
      link: "https://www.ateneo.edu/sose/discs/research",
      badges: [],
      title: "Software Developer Intern",
      start: "2023",
      end: "2023",
      description:
        "Developed a user interface using React.js for the organization's login and registration system, created an API using AWS Lambda and Python, and implemented an email verification system for new user registrations.",
    },
  ],
  skills: [
    "C++/C",
    "Python",
    "TypeScript",
    "Java",
    "HTML/CSS",
    "React",
    "Tailwind",
    "PHP",
    "PostgreSQL",
    "SQL",
    "Rest API",
    "git",
    "Notion",
    "Figma",
  ],
  projects: [
    {
      title: "Ateneo TALAB 2023",
      techStack: ["Frontend Developer", "Django", "HTML/CSS", "JavaScript"],
      description:
        "A platform to view and enlist for different talks and workshops",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "IndieCo",
      techStack: ["Frontend Developer", "PHP", "Laravel", "CSS"],
      description:
        "A web content management system tailored for a diverse range of media including articles, events, films, books, and podcasts",
      link: {
        label: "indie-co.com",
        href: "https://www.indie-co.com/",
      },
    },
    {
      title: "Ateneo OrSem",
      techStack: ["Full Stack Developer", "React", "Django"],
      description:
        "A comprehensive online hub for university orientation seminar information",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Blue Ballot: 2023 SANGGUNIAN GENERAL ELECTIONS",
      techStack: ["Frontend Developer", "React", "Tailwind"],
      description:
        "An interactive that allows users to explore the candidates for the 2023 Sanggunian General Elections",
      link: {
        label: "blueballot.theguidon.com",
        href: "https://blueballot.theguidon.com/2023/",
      },
    },
    {
      title: "UAAP Season 85 Primer Vol. 1",
      techStack: ["Frontend Developer", "PHP", "WordPress", "HTML/CSS"],
      description:
        "A website for UAAP fans, showcasing Ateneo teams, athletes, action photos, and in-depth written articles for each sport and team",
      link: {
        label: "theguidon.com",
        href: "https://theguidon.com/uaap-85-primer-volume-1/",
      },
    },
    {
      title: "UAAP Season 85 Primer Vol. 2",
      techStack: ["Frontend Developer", "PHP", "WordPress", "HTML/CSS"],
      description:
        "A website for UAAP fans, showcasing Ateneo teams, athletes, action photos, and in-depth written articles for each sport and team",
      link: {
        label: "theguidon.com",
        href: "https://theguidon.com/uaap-85-primer-volume-2/",
      },
    },
    {
      title: "Frozen in Time: Stories of the Ateneo Campus",
      techStack: ["Frontend Developer", "HTML/CSS", "JavaScript"],
      description:
        "An interactive digital collection showcasing seniors' stories, using HTML, CSS, and JavaScript",
      link: {
        label: "interactive.theguidon.com",
        href: "https://interactive.theguidon.com/2022/08/frozen-in-time/",
      },
    },
  ],
} as const;
