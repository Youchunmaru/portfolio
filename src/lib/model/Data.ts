import type { PersonalInfo, Skill, Project, Education, Hobby, Technologie } from "../../types/interfaces";

export const personalInfo: PersonalInfo = {
    lastName: "Gröner",
    firstName: "Samuel",
    summary: "I am a Full-Stack Software Developer with focus on Java Applications. I also know my way around the Web with TypeScript and Svelte.",
    email: "samuelgroener+jobs@gmail.com",
    phone: [{
        number: 17665447763,
        countryPrefix: 49,
        type: "mobile"
    }],
    address: {
        street: "Mähringerweg 80",
        city: "Ulm",
        state: "Germany",
        zip: "89075"
    },
    socials: [
        {
            name: "Github @Youchunmaru",
            link: "https://github.com/Youchunmaru",
            icon: {
                name: "Github",
                path: "Github",
                type: "lucide"
            }
        },
        {
            name: "Instagram @Youchunmaru",
            link: "https://www.instagram.com/youchunmaru/#",
            icon: {
                name: "Instagram",
                path: "Instagram",
                type: "lucide"
            }
        }
    ]
}

export const primarySkills: Technologie[] = [{
    name: "Java EE",
    level: "advanced",
    icon: {
        name: "Java",
        path: "java.png",
        type: "asset"
    }
},{
    name: "TypeScript",
    level: "intermidiate",
    icon: {
        name: "TypeScript",
        path: "Typescript.svg",
        type: "asset"
    }
},{
    name: "Svelte",
    level: "intermidiate",
    icon: {
        name: "Svelte",
        path: "svelte.png",
        type: "asset"
    }
}, {
    name: "MySQL",
    level: "intermidiate",
    icon: {
        name: "MySQL",
        path: "mysql.png",
        type: "asset"
    }
}];

export const secondarySkills: Technologie[] = [
{
    name: "Kotlin",
    level: "intermidiate",
    
}, {
    name: "CSS",
    level: "intermidiate",
    
}, {
    name: "JavaScript",
    level: "intermidiate",
    
}, {
    name: "Spring Boot",
    level: "beginner",

}, {
    name: "Docker",
    level: "intermidiate",
    
}, {
    name: "Git",
    level: "intermidiate",
    
}, {
    name: "Linux",
    level: "intermidiate",

}, {
    name: "Node.js",
    level: "intermidiate",

}, {
    name: "JMS",
    level: "intermidiate",

}, {
    name: "JPA",
    level: "intermidiate",

}, {
    name: "JSF",
    level: "intermidiate",

}, {
    name: "Hibernate",
    level: "intermidiate",

}, {
    name: "Scrum",
    level: "intermidiate",

}, {
    name: "Widlfy",
    level: "intermidiate",

}, {
    name: "EJB",
    level: "intermidiate",

}, {
    name: "REST",
    level: "intermidiate",

}, {
    name: "HTML",
    level: "intermidiate",

}, {
    name: "Java Swing",
    level: "intermidiate",

}];

export const projects: Project[] =[{
        tldr: "Visulization of logistical infrastructure through rendering with the Konva.js framework.<br>" + 
        "Map data is loaded and updated realtime through a standalone websocket.<br>" + 
        "Additional data and functinality is handeld via a rest service.",
        technologies: [{
            name: "Java",
        }, {
            name: "Node.js"
        }, {
            name: "Konva.js"
        }, {
            name: "TypeScript"
        }, {
            name: "WildFly"
        }, {
            name: "MySql"
        }],
        title: "Web Application for Visulization of the Logistics-Infrastructure",
        startDate: new Date("2024-10-01"),
        endDate: new Date("2025-07-04"),
        description: "A web application, made with konva and node using TS, uses json-obj's (map-obj's) from the connector(a standalone web socket server) to render and update the map in real time. " + 
        "The map data is stored in a mysql server and the states are updated through another standalone java application (logistics-controller). " + 
        "The controller gets telegrams from PLC's and updates the DB via a rest service running on a WildFly-Server. " + 
        "The rest service is also used for showing additional data or executing special functinonality. " + 
        "Special functionalities are functions implementet on the controllers that can be queryed and executed via JMS. ",
        icon: {
            name: "Java",
            path: "visu2.png",
            type: "asset"
        }
    },{
        title: 'SOPRA: Deserts of Dune',
        description: 'A 3X strategy game set in the Dune universe, developed in a team of five. My primary responsibility was the Java-based server, which managed all game logic, state, and communication between multiple clients. The project honed my skills in backend development, teamwork, and large-scale project management.',
        technologies: [{name: "Java"}],
        link: 'https://github.com/Youchunmaru/sopra',
        tldr: "A game server that handles all game logic, state, and communication between multiple clients.",
        startDate: new Date("2022-10-01"),
        endDate: new Date("2023-03-01"),
        icon: {
            name: "Dune",
            path: "Dune.png",
            type: "asset"
        }
    },{
        title: 'Portfolio',
        description: 'A website developed with svelte and tailwind to be my resume. Showcasing skills, projects, and experiences. The website is deployed using firebase.',
        technologies: [{name: "Svelte"}, {name: "Tailwind"}],
        link: 'https://github.com/Youchunmaru/portfolio',
        tldr: "This website. A website as a resume.",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-06-24"),
        icon: {
            name: "Portfolio",
            path: "portfolio.png",
            type: "asset"
        }
    }
];

export const experiences: Education[] =[
	{
        qualification: 'No Qualification',
        school: 'Universität Ulm',
        startDate: new Date("2019-09-01"),
        endDate: new Date("2023-03-01"),
        description: "",
        title: "Bacholor in Computer Science"
    },
	{
        qualification: 'Subject-Specific University Entrance Qualification',
        school: 'FOS/BOS Neu-Ulm',
        startDate: new Date("2015-09-01"),
        endDate: new Date("2019-06-01"),
        description: "",
        title: "High School"
    },
    {
        school: "mercatis GmbH / Robert-Bosh-Schule Ulm",
        qualification: "Apprenticeship",
        title: "Software Developer",
        startDate: new Date("2023-08-01"),
        endDate: new Date("2025-07-04"),
        description: `2 year apprenticeship as a <i class="tooltip">"Fachinformatiker in Anwendungsentwicklung"<span class="tooltiptext">IT-Specialist in application development</span></i>.`,
    }
];

export const otherExperience: Hobby[] = [{
	name: 'Scout',
	description: "I am a scout now for about " + (new Date().getFullYear() - 2009) + " years.<br>" + 
    "I've worked as a <b>group leader for 5 years</b>, planing small to bigger events with children aged 10y - 13y.<br>" + 
    "Now i am <b>officer of public relations and digital infrastructure</b> in my group."
},{
    name: 'Music',
    description: "I play guitar, keyboard and starting to learn violin."
}, {
    name: 'Gaming',
    description: "I like to play a viarity of games and genres. My most loved genres are RPGs.<br>" + 
    "I am a fan of the Final Fantasy games, especally FF VI, " + 
    "but i also like The Elder Scrolls games. But my most loved gaming franchise is probably Pokemon.<br>" + 
    "If i am not playing one of the above then i am probalby playing Tetris."
}, {
    name: 'Photographie',
    description: "I am a hobby photographer. Most of the time i am taking pictures of animals, but as part of my PR responsablilitys i am also taking pictures of various scouting events."
}];