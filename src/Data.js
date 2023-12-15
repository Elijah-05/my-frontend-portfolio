import randomQuote from "./images/project-random-quote.png";
import addisSystems from "./images/addisSystems.jpg";
import groceryList from "./images/project-my-grocery-list.png";
import netflix from "./images/netflix-clone.jpg";
import evangadi from "./images/evangadi-forum.jpg";
import amazon from "./images/amazon-clone.jpg";
import countdown from "./images/project-countdown.png";
import graphic from "./images/project-graphic-designs.png";
import saasImage from "./images/saas-company-template.png";
import ahmed from "./images/ahmed-profile.jpg";
import samuel from "./images/sami-profile.jpg";

export const texts = {
  about:
    "I Graduated in Civil Engineering from Jimma institute of Technology. In addition, I have also received Frontend Web Development Training Certification from <a. href=''>freecodecamp</a. am a talented, creative,  and passionate graphic designer who can complete a given design task in a specific time. I am eager to learn new things and update my knowledge. I can perform multiple tasks which are related.",
};
export const SkillsData = [
  [
    {
      skill: "React",
      value: 83,
    },
    {
      skill: "JavaScript",
      value: 70,
    },
    {
      skill: "Tailwind",
      value: 85,
    },
    {
      skill: "Bootstrap",
      value: 61,
    },
  ],
  [
    {
      skill: "Photoshop",
      value: 90,
    },
    {
      skill: "Figma",
      value: 60,
    },
    {
      skill: "Illustrator",
      value: 75,
    },
    {
      skill: "Adobe XD",
      value: 65,
    },
  ],
];

export const projectData = [
  {
    name: "AddisSystem Website",
    image: addisSystems,
    desc: "Developed from scratch figma design to code implementation.",
    tech: ["React", "JS", ""],
    link: "https://addissystems.et",
  },
  {
    name: "Saas Website Template",
    image: saasImage,
    desc: "Saas company website template challenge from internship company",
    tech: ["React", "JS", ""],
    link: "https://addis-tech.netlify.app/",
  },
  {
    name: "Netflix-Clone",
    image: netflix,
    desc: "front-end project with api fetch IMDB movie data",
    tech: ["React", "JS", ""],
    link: "https://ellay-netflix-clone.netlify.app/",
  },
  {
    name: "Amazon-Clone",
    image: amazon,
    desc: "Amazon Clone",
    tech: ["React", "JS", ""],
    link: "https://ella-amazon-clone.netlify.app/",
  },
  {
    name: "Evangadi Forum",
    image: evangadi,
    desc: "Evandadi forum, full stack project",
    tech: ["React", "JS", ""],
    link: "https://ella-evangadi-forum.netlify.app/",
  },
  {
    name: "My Grocery list",
    image: groceryList,
    desc: "Countdown timer project with an alarm sound. JS algorithm",
    tech: ["React", "JS", ""],
    link: "https://elijah-05.github.io/my-grocery-list-app/",
  },
  {
    name: "Random Quote",
    image: randomQuote,
    desc: "Generate random quotes from API with random colors",
    tech: ["React", "API", "CSS"],
    link: "https://codepen.io/Elijah-05/full/eYLGypb",
  },
  {
    name: "25 + 5 Countdown",
    image: countdown,
    desc: "Countdown timer project with an alarm sound. JS algorithm",
    tech: ["React", "JS", ""],
    link: "https://codepen.io/Elijah-05/full/KKxxrWX",
  },
  {
    name: "Graphic Designs",
    image: graphic,
    desc: "Graphic Design works for different companies",
    tech: "",
    link: "https://www.behance.net/Elyas_Abebe",
  },
];

export const testimonialData = [
  {
    name: "Ahmed Mohamed",
    profession: "Backend Developer",
    message:
      "Elyas is creative frontend developer. He often communicates well with the Backend developers, and takes fedback as an improvment.",
    avatar: ahmed,
  },
  {
    name: "Samuael Adnew",
    profession: "Web Developer",
    message:
      "Well designed, and attractive UI/UX. I like the animation, the google map, structure, especially the Brand color choise.",
    avatar: samuel,
  },
];
