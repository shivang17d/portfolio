/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shivang",
  logo_name: "Shiv.Gupta()",
  full_name: "Shivang Gupta",
  subTitle:
    "from Pune, India. I am a self-driven, quick starter, and passionate programmer.",
  resumeLink:
  "https://drive.google.com/file/d/1itXukGGsilqSjoV2LjCL5qSZhmCpeJtk/view?usp=sharing",
  
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/shivang17d",
  linkedin: "https://www.linkedin.com/in/shivangguptax",
  gmail: "shivangguptaxd@gmail.com",
  whatsapp: "https://wa.me/+918605143918",
  instagram: "https://www.instagram.com/shivang17d/",
  twitter: "https://twitter.com/shivang17d/",
};

const skills = {
  data: [
    {
      title: "Tech Stack",
      fileName: "FullStackImg",
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
//         {
//           skillName: "Android",
//           fontAwesomeClassname: "simple-icons:android",
//           style: {
//             color: "#3DDC84",
//           },
//         },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bachelors in Information Technology",
      duration: "2020 - 2024",
      descriptions: [
        "⚡  CGPA :  9.77*",
      ],
    },
    {
      title: "12th Grade",
      duration: "2019 - 2020",
      descriptions: [
        "⚡  Percentage : 85.85",
      ],
    },
    {
      title: "10th Grade",
      duration: "2017 - 2018",
      descriptions: [
        "⚡  Percentage : 92.60",
      ],
    },
  ],
};


const projectsHeader = {
  title: "Projects",
  description:
    "Have a look to my Projects.",
  avatar_image_path: "projects_image.svg",
};


const contactPageData = {
  contactSection: {
    profile_image_path: "profile1.jpg",
  },
};

const projects = {
  data: [
     {
      id: "0",
      name: "CodeVilla",
      url: "https://codevilla.onrender.com/",
      description:
        "Realtime Code-Editor",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
      ],
    },
    
    
    {
      id: "1",
      name: "Blogify Website",
      url: "https://shivang-blogify.netlify.app/",
      description:
        "Full Stack Blogging Website",
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        
      ],
    },
    
    
     {
      id: "2",
      name: "FundRaiser",
      url: "https://fundraiser-web3.netlify.app/",
      description:
        "This Project is a Web3 based FundRaiser React application which allows users to Fund any cause listed on this application.",
      languages: [
        {
          name: "Solidity",
          iconifyClass: "logos-solidity",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
      ],
    },
    
     
    
    
    
    
    {
      id: "3",
      name: "Cricket Stadium Locator",
      url: "https://shivang17d.github.io/Cricket-Stadium-Locator/",
      description:
        "Locating various cricket stadiums in India on Map using leaflet.js.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "GitHub Finder",
      url: "https://shivang17d.github.io/GithubFinder/",
      description:
        "Find any GitHub account stats by entering username.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "Music Player",
      url: "https://shivang17d.github.io/MusicPlayer/",
      description:
        "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "6",
      name: "English Dictionary",
      url: "https://shivang17d.github.io/Dictionary/",
      description:
        "Increase your Vocabulary by using this dictionary.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "7",
      name: "Portfolio Website",
      url: "https://shivanggupta.vercel.app",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  projectsHeader,
  contactPageData,
  projects,
};
