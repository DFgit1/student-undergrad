var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var students = /** @class */ (function () {
    function students(stud_name, stud_age, stud_nation) {
        this.name = stud_name;
        this.age = stud_age;
        this.gender = "Female";
        this.nationality = stud_nation;
    }
    students.prototype.getNationality = function () {
        return "Nationality: " + this.nationality;
    };
    return students;
}());
var undergrad = /** @class */ (function (_super) {
    __extends(undergrad, _super);
    function undergrad(stud_name, stud_age, stud_nation, under_batch, stud_type, stud_gpa) {
        var _this = _super.call(this, stud_name, stud_age, stud_nation) || this;
        _this.batch = under_batch;
        _this.type = stud_type;
        _this.gpa = stud_gpa;
        return _this;
    }
    return undergrad;
}(students));
var student1 = new students("Wendy Brader", 54, "American");
var student2 = new students("Mary Tavish", 26, "Spanish");
var undergrad1 = new undergrad("Victoria", 45, "Female", "Canadian", 76, 87);
console.log(student1.getNationality());
console.log(student2.getNationality());
console.log(undergrad1.getNationality());
