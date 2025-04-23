import type { Level } from "./Level";

export class Technology {

    private readonly name: string;
    private readonly logo: string;
    private readonly level: Level;

    constructor(name: string, logo: string, level: Level) {
        this.name = name;
        this.logo = logo;
        this.level = level;
    }

    getLogo(){
        return this.logo;
    }

    getName(){
        return this.name;
    }

    getLevel(){
        return this.level;
    }
}