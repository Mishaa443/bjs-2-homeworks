'use strict'
function solveEquation(a, b, c) {
  let arr = []
  let discriminant = b**2-4*a*c
    if (discriminant < 0){
        arr =[]
    }else if (discriminant === 0 ){
       let root = -b/(2*a)
       arr.push(root)
        
    }else if (discriminant > 0){
        let rootOne = (-b + Math.sqrt(discriminant) )/(2*a)
        let rootTwo = (-b - Math.sqrt(discriminant) )/(2*a)
        arr.push(rootOne, rootTwo)
      }
  return arr
}

/*
function calculateTotalMortgage(percent, contribution, amount, date) {  
  let arrParemetr = [percent, contribution, amount]
  console.log(arrParemetr)
  for(let i = 0; i < arrParemetr.length; i++){
    let number = Number(arrParemetr[i]) 
    console.log(typeof(number))
    if (typeof(number) != 'number'){
      console.log(typeof(arrParemetr[i]))
      console.log("Параметр <название параметра> содержит неправильное значение <значение параметра>")
      break;
    }else{
      console.log(typeof(arrParemetr[1]))
      continue
    }
  }

  let totalAmount;

  
 return totalAmount;
}

calculateTotalMortgage("10", 'asd', 100, 12) 
*/