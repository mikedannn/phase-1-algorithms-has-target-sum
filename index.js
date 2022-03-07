function hasTargetSum(array, target) {
  for(let startIndex = 0; startIndex < array.length - 1; startIndex++){
    for(let j = startIndex + 1; j < array.length; j++){
      if(array[startIndex] + array[j] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  0(log n)
*/

/* 
  function hasTargetSum(array, target) {
    for loop over the array incrementing over each integer
      set a variable to the array position + 1 and have it increment up
        if integer + integer = target
          return true

    return false 
  }
  
*/

/*
  The function hasTargetSum takes in an array and a target.  It loops over each integer in the array, 
  and then sets a variable to another position in the array.  If adding the integer and the variable value = the target 
  it will return true.  if not it returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 7, 12, 9, 80, 7], 87));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 12, 11, 7], 110));

  console.log("");
}

module.exports = hasTargetSum;
