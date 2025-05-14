var student = [];

function addStudent(name, mark) {
    mark = Number(mark);
    mark = mark ?? 0;
    name = name.toUpperCase();
    student.push({ name, mark });
}

addStudent("David", "76");
addStudent("Did", "90");
addStudent("avid", "80");
addStudent("id", "99");

function grades() {
    student.map((hey) => {
        let grade = 'F';
        if (hey.mark >= 90) grade = 'A';
        else if (hey.mark >= 80) grade = 'B';
        else if (hey.mark >= 70) grade = 'C';
        else if (hey.mark >= 60) grade = 'D';
        hey.grade = grade;
    });
}

// TOP SCORES:
function gettopscores() {
    return student.filter((hey) => hey.grade == 'A');
}

function findstudent(name) {
    return student.find((hey) => hey.name == name.toUpperCase());
}

function hasfailures() {
    return student.some((hey) => hey.mark <= 35); 
}

function displaydata() {
    console.log("STUDENT DATA");
    console.log("------------");
    student.forEach((student) => {
        console.log(`${student.name} | ${student.mark} | ${student.grade}`);
    });
}

// Run logic
grades(); 
var l = gettopscores();

console.log(student);     
console.log(l);          
console.log(hasfailures()); 
displaydata();             






