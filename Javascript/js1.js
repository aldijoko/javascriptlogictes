// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  input.sort();
  
  var median = Math.floor((input.length - 1) / 2);
  if (input.length % 2) {
        return input[median];
    } else {
        return (input[median] + input[median + 1]) / 2.0;
    }
  
  return input;
}

console.log(result(input));
