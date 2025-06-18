export interface Skill {
	name: string;
    level?: string;
}

export interface Technologie extends Skill{
    icon?: Icon;
}

export interface Project extends Experience{
    tldr: string;
	technologies: Technologie[];
	icon?: Icon;
}

interface Experience {
    title: string;
    startDate: Date;
    endDate?: Date;
	description: string;
    link?: string;
}

export interface Education extends Experience {
    school: string;
    qualification: string;
}

export interface Work extends Experience {
    company: string;
    role: string;
}

export interface Hobby {
	name: string;
	description: string;
}

export interface Icon {
    name: string,
    path: string;
    type: string;
}

export interface Social{
    name: string;
    link: string;
    icon: Icon;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface Phone {
    number: number;
    countryPrefix: number;
    type: string;
}

export interface PersonalInfo {
	lastName: string;
    firstName: string
	summary: string;
	email: string;
	phone: Phone[];
	address: Address;
    socials: Social[];
}
