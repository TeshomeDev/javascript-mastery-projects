
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 90 }
]

// Task:
// Filter students who scored ≥ 80
// Map to their names
// Reduce to a single string of names separated by commas
// Output: "Alice,Charlie"

// Students who scored >= 80
const studentsScoredEightyAndAbove = students.filter(student => student.score >= 80);
const nameOfStudentsScoredEightyAndAbove = studentsScoredEightyAndAbove.map(student => student.name);

const studentsLists = nameOfStudentsScoredEightyAndAbove.join();
console.log(studentsLists);

// Another version of the challenge

const studentList = students
.filter(student => student.score >= 80)
.map(student => student.name)
.reduce((students, student) => {
   return students === "" ? student : students + "," + student;
}, "");

console.log(studentList);


// Another version again

const studentListing = students
.filter(student => student.score >= 80)
.map(student => student.name).join(", ");

console.log(studentListing);

