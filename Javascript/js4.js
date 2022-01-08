// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
    {
      id: "1",
      name: "Sherlock",
      score:90
    },
    {
      id: "2",
      name: "Genta",
      score: 75
    },
    {
      id: "3",
      name: "Ai",
      score: 80
    },
    {
      id: "4",
      name: "Budi",
      score:85
    }
  ]
  
  function result() {
    // Your Code Here
    const dataScore = students.filter(student => student.score >= 85);
    return dataScore;
  }
  
  console.log(result());
