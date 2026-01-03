console.log(`loading program....`);
const students = [];

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
} console.log(students);

// 2. collect data for multiple students

function collectData() {
    let addMore = true;
    while (addMore) {
        const student = getUserInfo();
        students.push(student);
        addMore = confirm("Do you want to add another student?");
    }

} collectData();

//3. show the attendance percentage
function showAttendancePercentage() {
    let presentStudents = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance === true) {
            presentStudents++;
        }
    }
    const percentageAttendance = (presentStudents / students.length) * 100;
    console.log(`Number of present students are :${presentStudents}`);
    console.log(`The attendance percentage is ${percentageAttendance}%`);
    alert(`The attendance percentage is ${percentageAttendance}%`);
} showAttendancePercentage();

//4. function createTeams

function createTeams(numberOfTeams) {

    const presentStudentsArray = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance === true) {

            presentStudentsArray.push(students[i].name);
        }
    }

    // fisher-yates
    for (let i = presentStudentsArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [presentStudentsArray[i], presentStudentsArray[randomIndex]] = [presentStudentsArray[randomIndex], presentStudentsArray[i]];
    }

    console.log(`Random present students are: ${presentStudentsArray}`);

    const teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
        teams[i] = [];
    }

    for (let i = 0; i < presentStudentsArray.length; i++) {
        const teamIndex = i % numberOfTeams;
        teams[teamIndex].push(presentStudentsArray[i]);

    }

    for (let i = 0; i < teams.length; i++) {
        console.log("TEAM: " + (i + 1));

        for (let j = 0; j < teams[i].length; j++) {
            console.log(teams[i][j]);
        }
    }
} createTeams(3);
