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

for (let i = 0; i < students.length; i++) {
    if (students.attendance ===true) {
        console.log(`present students are: ${students.name}`);
    
    
}else{
    console.log(`nu se poate`);
    
}
}