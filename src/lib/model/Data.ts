import type { PersonalInfo, Skill, Project, Education, Hobby } from "../../types/interfaces";

export const personalInfo: PersonalInfo = {
    lastName: "Gröner",
    firstName: "Samuel",
    summary: "some text",
    email: "some emial",
    phone: [{
        number: 0,
        countryPrefix: 0,
        type: "type"
    }],
    address: {
        street: "street",
        city: "city",
        state: "state",
        zip: "zip"
    },
    socials: [
        {
            name: "git",
            link: "git",
            icon: {
                name: "Github",
                path: "git",
                type: ""
            }
        },
        {
            name: "insta",
            link: "insta",
            icon: {
                name: "Instagram",
                path: "insta",
                type: ""
            }
        }
    ]
}

export const primarySkills: Skill[] = [{
    name: "pr",
    level: "1"
}];

export const secondarySkills: Skill[] = [{
    name: "pr",
    level: "0"
}];

export const projects: Project[] =[{
    link: 'https://github.com/Youchunmaru/logistics-visualization-placeholder',
    tldr: "tldr",
    technologies: [{
        name: "pr",
    }],
    title: "title",
    startDate: new Date("2023-01-01"),
    description: ""
},
	{
        title: 'SOPRA: Deserts of Dune',
        description: 'A 3X strategy game set in the Dune universe, developed in a team of five. My primary responsibility was the Java-based server, which managed all game logic, state, and communication between multiple clients. The project honed my skills in backend development, teamwork, and large-scale project management.',
        technologies: [],
        link: 'https://github.com/Youchunmaru/deserts-of-dune-placeholder',
        tldr: "tldr",
        startDate: new Date("2023-01-01"),
    },
];

export const experiences: Education[] =[
	{
        qualification: 'Computer Science Studies',
        school: 'Universität Ulm',
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-01-01"),
        description: "",
        title: ""
    },
	{
        qualification: 'Subject-Specific University Entrance Qualification',
        school: 'FOS/BOS Neu-Ulm',
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-01-01"),
        description: "",
        title: ""
    },
    {
        school: "",
        qualification: "",
        title: "",
        startDate: new Date("2023-01-01"),
        description: ""
    }
];

export const otherExperience: Hobby[] = [{
	name: 'Leadership & Community Involvement',
	description: "desc"
}];