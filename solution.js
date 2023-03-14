/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

function partitionStudentsByScore(students, score){
  if(students.length === 0 ) return [[],[]];
  const lower = [];
  const higher = [];

  students.forEach(studentObj => {
    if(studentObj.score <= score){
      lower.push(studentObj)
    }else{
      higher.push(studentObj)
    }
  });
  return [lower.sort((a,b) => a.score - b.score), higher.sort((a,b) => a.score - b.score)]
}

console.log(partitionStudentsByScore(students, 10));

module.exports = partitionStudentsByScore
