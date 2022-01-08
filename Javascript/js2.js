// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
  // Your Code Here
  var data = array1;
  if(data <= '90'){
      return true;
  }
}

console.log(result(array1));
