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
  
  
  
  
  const ans = linearSearch([2, 7, 13, 4], 13);
  console.log(ans)