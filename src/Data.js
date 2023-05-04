import randomQuote from './images/project-random-quote.png'
import groceryList from './images/project-my-grocery-list.png'
import countdown from './images/project-countdown.png'
import portfolio from './images/project-personal-portfolio2.png'
import graphic from './images/project-graphic-designs.png'


export const texts = {
    about: "I Graduated in Civil Engineering from Jimma institute of Technology. In addition, I have also received Frontend Web Development Training Certification from <a. href=''>freecodecamp</a. am a talented, creative,  and passionate graphic designer who can complete a given design task in a specific time. I am eager to learn new things and update my knowledge. I can perform multiple tasks which are related."
}
export const SkillsData = [
    [
        {
            skill: 'React',
            value: 83,
        },
        {
            skill: 'JavaScript',
            value: 70,
        },
        {
            skill: 'Tailwind',
            value: 85,
        },
        {
            skill: 'Bootstrap',
            value: 61,
        },
    ],
    [   
        {
            skill: 'Photoshop',
            value: 90,
        },
        {
        skill: 'Figma',
        value: 60,
        },
        {
            skill: 'Illustrator',
            value: 75,
        },
        {
            skill: 'Adobe XD',
            value: 65,
        },
    ]
]

export const projectData = [
    {
        name: 'Random Quote',
        image: randomQuote,
        desc: 'Generate random quotes from API and also show with random colors',
        tech: ['React', 'API', 'CSS'],
        link: 'https://codepen.io/Elijah-05/full/eYLGypb'
    },
    {
        name: 'My Grocery list',
        image: groceryList,
        desc: 'Countdown timer project with an alarm sound. JS algorithm',
        tech: ['React', 'JS', ''],
        link: 'https://elijah-05.github.io/my-grocery-list-app/'
    },
    {
        name: '25 + 5 Countdown',
        image: countdown,
        desc: 'Countdown timer project with an alarm sound. JS algorithm',
        tech: ['React', 'JS', ''],
        link: 'https://codepen.io/Elijah-05/full/KKxxrWX'
    },
    {
        name: 'Portfolio Sample',
        image: portfolio,
        desc: 'Simple responsive portfolio page with grid layout system',
        tech: '',
        link: 'https://codepen.io/Elijah-05/full/dygWMNp'
    },
    {
        name: 'Graphic Designs',
        image: graphic,
        desc: 'Graphic Design works for different companies',
        tech: '',
        link: 'https://www.behance.net/Elyas_Abebe'
    },
]

export const testimonialData = [
    {
        name: "Ahmed Mohamed",
        profession: 'Backend Developer',
        message: 'Elijah is creative frontend programmer. He often communicates well with Backend developers. I recommend to anyone who needs dynamic website.',
    },
    {
        name: "Samuel Teklay",
        profession: 'Project Manager',
        message: 'From the start of the project, through to completion, Elijah supported us and exceeded our expectations in every way. ',
    },

]