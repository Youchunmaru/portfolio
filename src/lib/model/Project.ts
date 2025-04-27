import type { Technology } from "./Technology";

class Project {

    private readonly startDate: Date;
    private readonly endDate: Date;
    private readonly name: string;
    private readonly description: string;
    private readonly technologies: Technology[];
    private readonly link: string;

    constructor(startDate: Date, endDate: Date, name: string, description: string, technologies: Technology[], link: string){
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.description = description;
        this.technologies = technologies;
        this.link = link;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getTechnologies(): Technology[] {
        return this.technologies;
    }

    getLink(): string {
        return this.link;
    }
}