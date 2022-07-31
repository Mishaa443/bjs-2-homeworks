
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0]
  max = arr[0]
  sum = arr[0]
  for (let i = 0; i < arr.length; i++){
    if (101 > arr[0] < -101){
      console.log("Введи значение от -100 до 100")
      break
    }
  }
  
  for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
    else if(arr[i] < min){
      min = arr[i]
    }
    sum += arr[i] 
  }
  avg = sum / arr.length
  avg = avg.toFixed(2)
  avg = Number(avg)
  return { min: min, max: max, avg: avg };
}




// Задание 2

function worker(arr) {
  let sum = 0
  sum = arr.reduce((a, b) => a + b, 0);

  return sum;
}


function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0])
  
  for(let i = 0; i < arrOfArr.length; i++ ){
    if (func(arrOfArr[i]) > max){
      max = func(arrOfArr[i])
      console.log(max)
    }
    
  }
  
  return max;
}

//Задание 3 
  function worker2(arr) {
    let max = Math.max.apply(null, arr);
        min = Math.min.apply(null, arr)
    
    
    return Math.abs(max - min);
    
  }
  
  function makeWork(arrOfArr, func) {
    let max = func(arrOfArr[0])
    
    for(let i = 0; i < arrOfArr.length; i++ ){
      if (func(arrOfArr[i]) > max){
        max = func(arrOfArr[i])
        console.log(max)
      }
      
    }
    
    return max;
  }

  
