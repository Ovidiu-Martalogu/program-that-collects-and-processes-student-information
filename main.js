console.log(`loading program....`);

const students = [];
let addMore = true;

// 1. function get user info
function getUserInfo() {
    const name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    age = Number(age);
    const attendance = confirm("Are you present?");

    return {
        name: name,
        age: age,
        attendance: attendance
    };
}

// 2. collect data for multiple students

while (addMore) {
    const student = getUserInfo();
    students.push(student);
    addMore = confirm("Do you want to add another student?");
}
console.log(students);
console.log(students.attendance);


//3. show the attendance percentage

let presentStudents = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].attendance === true) {
        presentStudents++;
    }
} console.log(presentStudents);

const percentageAttendance = (presentStudents / students.length) * 100;

console.log(`The attendance percentage is ${percentageAttendance}%`);
alert(`The attendance percentage is ${percentageAttendance}%`);

//4. function createTeams

function createTeams(numberOfTeams) {
    //store only present student as array;
    const presentStudentsArray = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance === true) {
            console.log(students[i].name + " este prezent");
            presentStudentsArray.push(students[i].name);
        }
    }


} createTeams(3);