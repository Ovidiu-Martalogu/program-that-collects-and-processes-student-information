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
}

// 2. collect data for multiple students
//Use this function to collect data for
//  multiple students and store their 
// information in an array.
function collectData() {
    let addMore = true;
    while (addMore) {
        const student = getUserInfo();
        students.push(student);
        addMore = confirm("Do you want to add another student?");
    }
    console.log(students);
} collectData();


//3. show the attendance percentage
function showAttendancePercentage() {
    let presentStudents = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].attendance === true) {
            presentStudents++;
        }
    } console.log(presentStudents);
    const percentageAttendance = (presentStudents / students.length) * 100;
    console.log(`The attendance percentage is ${percentageAttendance}%`);
    alert(`The attendance percentage is ${percentageAttendance}%`);
} showAttendancePercentage();

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

    // fisher-yates
    for (let i = presentStudentsArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [presentStudentsArray[i], presentStudentsArray[randomIndex]] = [presentStudentsArray[randomIndex], presentStudentsArray[i]];
    }

    console.log(`Present students are: ${presentStudentsArray}`);

      
    // make the teams
    const teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
        teams[i]=[];
        console.log(`TEAM ${[i+1]} :\n ${presentStudentsArray[i]}`);
        
    }

    //distribute?
    /*
    for (let i = 1; i <= presentStudentsArray.length; i++) {
        const teamIndex = i%numberOfTeams;
        teams[teamIndex].push(presentStudentsArray[i]);
       
        console.log(`teams are :${teams}`);
    }
*/
} createTeams(3);

