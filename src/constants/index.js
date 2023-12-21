import { TechnoClim, ExtraRoom, meta, shopify, starbucks, tesla } from "../assets/images";
import { 
    gmail,
    homeadvisor,
    shopee,
    php,
   // streamlit,
    symfony,
    python,
    bootstrap,
    django,
    dotnet,
   sqlite,
    phpmyadmin,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from '../assets/icons'

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Framework Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: phpmyadmin,
        name: "PhpMyadmin",
        type: "Database",
    },
    {
        imageUrl: dotnet,
        name: "Asp.net",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Langage de programtion",
    },
    {
        imageUrl: python,
        name: "Pyhton",
        type: "Langage de programtion",
    },
    {
        imageUrl: symfony,
        name: "Symfony",
        type: "Framework",
    },
    {
        imageUrl: sqlite,
        name: "SQL",
        type: "Database",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Techno Clim",
        icon: TechnoClim,
        iconBg: "#accbe1",
        date: "June 2021 - August 2021",
        points: [
            "Developing and maintaining web applications using Python and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "June 2022 - August 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Extra Room",
        icon: ExtraRoom,
        iconBg: "#ffffcc",
        date: "June 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using php and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/elm-dak',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/elmestapha-dakouky-62a892269/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Daily a worker',
        description: 'Developed a web application that post work and costumer take it .',
        link: 'https://github.com/elm-dak/Daily-a-worker',
    },
    {
        iconUrl: shopee,
        theme: 'btn-back-green',
        name: 'Shop Online',
        description: 'Created a full-stack Application for E-commerce with ASP.NET and Bootstrap.',
        link: 'https://github.com/elm-dak/e-Shop',
    },
    {
        iconUrl: homeadvisor,
        theme: 'btn-back-blue',
        name: 'Booking Hotel',
        description: 'Created application for reservation hotel and chambers with full management admin with Django and Bootstrap.',
        link: 'https://github.com/elm-dak/booking-hotel',
    },
    {
        iconUrl: gmail,
        theme: 'btn-back-pink',
        name: 'Detection email spam',
        description: 'Built a application for detection spam email or sms just enter message and show resulat With Machine learning and deploy in streamlit.',
        link: 'https://github.com/elm-dak/D-tection-spam',
    },
   
];