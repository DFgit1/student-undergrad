

class students {
    name;
    age;
    gender;
    nationality;

    constructor(stud_name: string, stud_age: number, stud_gender: "Female", stud_nation: string) {
        this.name = stud_name;
        this.age = stud_age;
        this.gender = stud_gender;
        this.nationality = stud_nation;
    }
    getNationality(){
        return "Nationality: " + this.nationality;
    }  
}

// interface Istudents{
//     name:string;
//     age:number;
//     gender:string;
//     nationality:string;
// }

interface Iundergrad {
    batch:string;
    type:number;
    gpa:number;
}
class undergrad extends students implements Iundergrad {
    batch:string;
    type:number;
    gpa:number;

    constructor(stud_name: string, stud_age: number, stud_gender: "Female", stud_nation: string, under_batch: string, stud_type:number, stud_gpa:number) {
        super(stud_name, stud_age, stud_gender, stud_nation);
        this.batch = under_batch;
        this.type = stud_type;
        this.gpa = stud_gpa;
    }
}


let student1 = new students("Wendy Brader", 54, "Female", "American");
let student2 = new students("Mary Tavish", 26, "Female", "Spanish");



// let manystudents:students[] = [
//     {name:"Wendy Brader", age: 54, gender: "Female", nationality: "American"},
//     {name: "Jane Weber", age: 15, gender: "Female", nationality: "Canadian"},
//     {name: "Melanie Liberte", age: 42, gender: "Female", nationality: "French"},
//     {name: "Melissa Luga", age:62, gender: "Female", nationality: "Polish"},
//     {name: "Danielle Delmar", age: 22, gender: "Female", nationality: "Spanish"},
// ]

let undergrad1 = new undergrad("Victoria", 45, "Female", "Canadian", "Secondary", 5, 87);


console.log(student1.getNationality());
console.log(student2.getNationality());
console.log(undergrad1.getNationality());

