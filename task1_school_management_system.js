class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email; 
        this.id = id;       
    }

    set email(value) {
        if (!value.includes("@")) {
            console.log("Invalid email: must contain '@'.");
            return;
        }
        this.#email = value;
    }

    get email() {
        return this.#email;
    }

    set id(value) {
        if (typeof value !== "number" || value <= 0) {
            console.log("Invalid ID: must be a positive number.");
            return;
        }
        this.#id = value;
    }

    get id() {
        return this.#id;
    }

    describeRole() {
        console.log(`${this.name} is a member of the school.`);
    }
}

class Principal extends Person {
    #members = [];

    constructor(name, email, id) {
        super(name, email, id);
    }

    addMember(member) {
        this.#members.push(member);
        console.log(`${member.name} was added by Principal ${this.name}.`);
    }

    removeMember(id) {
        let index = -1;

        for (let i = 0; i < this.#members.length; i++) {
            if (this.#members[i].id === id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log("Member not found.");
            return;
        }

        console.log(`${this.#members[index].name} was removed.`);
        this.#members.splice(index, 1);
    }

    listMembers() {
        console.log(`Members managed by Principal ${this.name}:`);
        for (let member of this.#members) {
            console.log("- " + member.name);
        }
    }

    describeRole() {
        console.log(`${this.name} is the Principal, overseeing the entire school.`);
    }
}

class Teacher extends Person {
    #gradedStudents = [];

    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
    }

    gradeStudent(studentName, grade) {
        this.#gradedStudents.push({ name: studentName, grade: grade });
        console.log(`${this.name} graded ${studentName}: ${grade}`);
    }

    listGradedStudents() {
        console.log(`${this.name}'s graded students (${this.subject}):`);
        for (let record of this.#gradedStudents) {
            console.log("- " + record.name + ": " + record.grade);
        }
    }

    describeRole() {
        console.log(`${this.name} is a Teacher who teaches ${this.subject}.`);
    }
}

class Student extends Person {
    #enrolledSubjects = [];

    constructor(name, email, id) {
        super(name, email, id);
    }

    enroll(subject) {
        this.#enrolledSubjects.push(subject);
        console.log(`${this.name} enrolled in ${subject}.`);
    }

    viewSubjects() {
        console.log(`${this.name}'s enrolled subjects:`);
        for (let subject of this.#enrolledSubjects) {
            console.log("- " + subject);
        }
    }

    describeRole() {
        console.log(`${this.name} is a Student currently attending classes.`);
    }
}

const principal = new Principal("Dr. Mona", "mona@school.com", 1);
const teacher = new Teacher("Mr. Ahmed", "ahmed@school.com", 2, "Mathematics");
const student = new Student("Esraa", "esraa@school.com", 3);

console.log("---- Principal adds members ----");
principal.addMember(teacher);
principal.addMember(student);
principal.listMembers();

console.log("---- Teacher grades a student ----");
teacher.gradeStudent("Esraa", "A");
teacher.gradeStudent("Ali", "B");
teacher.listGradedStudents();

console.log("---- Student enrolls in subjects ----");
student.enroll("Mathematics");
student.enroll("Science");
student.viewSubjects();

console.log("---- Principal removes a member ----");
principal.removeMember(3);
principal.listMembers();

console.log("---- All members describe their role ----");
const allMembers = [principal, teacher, student];

allMembers.forEach((member) => {
    member.describeRole();
});

console.log("---- Validation checks ----");
const invalidPerson = new Student("Test", "not-an-email", -5);
console.log("Email:", invalidPerson.email);
console.log("ID:", invalidPerson.id);
