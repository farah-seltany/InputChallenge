import { Skill } from './skill';

export class Developer {
    public lastName: string;
    public firstName: string;
    public age: number;
    public sexe: string;
    public bio: string;
    public skills: Skill[];

    constructor(lastName, firstName, age, sexe, bio, skills)
    { 
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.sexe = sexe;
        this.bio = bio;
        this.skills = skills;
    }
}
