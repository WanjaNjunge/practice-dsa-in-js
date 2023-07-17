function linearSearch(array, key) {
    // looping through the array
     for(let i = 0; i < array.length; i++)
     // check for position
     if (array[i] === key) {
       //result
       return i
     } 
     return -1;
     
  }

function verify(index) {
    index!==-1?
    console.log("Target found at "+index):console.log("Target not found")
}
  
  
  
  numbers = [2, 7, 13, 4]
  const ans = linearSearch(numbers, 11);
  console.log(verify(ans));