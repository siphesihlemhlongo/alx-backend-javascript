interface Teacher{
  firstName: string,
  fullTimeEmployee: boolean,
  lastName: string,
  location: string,
  contract: boolean,
  [key: string]: any;
  };

  interface Directors extends Teacher {
  numberOfReports: number;
  }

  class TeacherImpl implements Teacher {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public fullTimeEmployee: boolean,
        public location: string,
        public yearsOfExperience?: number
    ) {}
}

const teacher1 = new TeacherImpl("John", "Doe", true, "New York");
const teacher2 = new TeacherImpl("Jane", "Smith", false, "Los Angeles", 3);
teacher2.contract = true;

console.log(teacher1);
console.log(teacher2);

class DirectorImpl extends TeacherImpl implements Directors {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public fullTimeEmployee: boolean,
        public location: string,
        public numberOfReports: number,
        public yearsOfExperience?: number
    ) {
        super(firstName, lastName, fullTimeEmployee, location, yearsOfExperience);
    }
}

const director1 = new DirectorImpl("John", "Doe", true, "New York", 10);
const director2 = new DirectorImpl("Jane", "Smith", false, "Los Angeles", 5, 3);
director2.contract = true;

console.log(director1);
console.log(director2);

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentMethods {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentMethods {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
