

class students {
    name;
    age;
    gender;
    nationality;

    constructor(stud_name: string, stud_age: number, stud_nation: string) {
        this.name = stud_name;
        this.age = stud_age;
        this.gender = "Female";
        this.nationality = stud_nation;
    }
    getNationality(){
        return "Nationality: " + this.nationality;
    }  
}


interface Iundergrad {
    name: string;
    age: number;
    gender: "Female";
    nationality: string;
    batch:string;
    type:number;
    gpa:number;
}
class undergrad extends students implements Iundergrad {
    batch:string;
    type:number;
    gpa:number;

    constructor(stud_name: string, stud_age: number, stud_nation: string, under_batch: string, stud_type:number, stud_gpa:number) {
        super(stud_name, stud_age, stud_nation);
        this.batch = under_batch;
        this.type = stud_type;
        this.gpa = stud_gpa;
    }
}


let student1 = new students("Wendy Brader", 54, "American");
let student2 = new students("Mary Tavish", 26, "Spanish");
let undergrad1 = new undergrad("Victoria", 45, "Female", "Canadian", 76, 87);


console.log(student1.getNationality());
console.log(student2.getNationality());
console.log(undergrad1.getNationality());

