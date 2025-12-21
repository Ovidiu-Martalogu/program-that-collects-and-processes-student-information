console.log(`loading program....`);

// let students = {
//     name: name,
//     age: age,
//     attendance: attendance
// };
// let allStudents=prompt(`How many students are in class?`)
// allStudents = Number(allStudents);


function getUserInfo() {
    const name = prompt("Enter your name:");
    let age = (prompt("Enter your age:"));
    age = Number(age);
    const attendance = confirm("Are you present?");
    const students = {
        name: name,
        age: age,
        attendance: attendance
    };
    console.log(students);
    return students;
}
// Call the function
getUserInfo();