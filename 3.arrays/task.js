
function compareArrays(arr1, arr2) {
  let result =  arr1.every((n, i) => n === arr2[i]) && arr1.length === arr2.length

  
  console.log(result)
  return result; // boolean
 
}


function advancedFilter(arr) {
  let resultArr = arr.filter((element) =>  element % 3 === 0 && element > 0).map((element) => element * 10) 

  
  console.log(resultArr)
  return resultArr; // array
}
