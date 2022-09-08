function parseCount(value){
    let parseInt = Number.parseInt(value)
    if(isNaN(parseInt)) {
        throw new Error ("Невалидное значение")
    }
    return parseInt
    
    
}


function validateCount(value){
    try{
        let parseInt = parseCount(value)
        return parseInt
        } 
        catch(Error){
            return Error
        }
        
   
}


class Triangle{
    constructor(a, b , c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || b + c < a  || a + c < b){ 
            throw new Error ("Треугольник с такими сторонами не существует")
        }
        
    }

    getPerimeter(){
        return this.a + this.b + this.c
    }
    getArea(){
        let p = 0.5 * this.getPerimeter();
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));  
        return +s.toFixed(3) 
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c )
    }
    catch{
        return { 
            getPerimeter() { 
                return "Ошибка! Треугольник не существует";
            }, 
             getArea(){
               return "Ошибка! Треугольник не существует";
             }
        }
    }
}

