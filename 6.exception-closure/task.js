
function parseCount(value){
    let parseInt = Number.parseInt(value)
    
    try{
    if (isNaN(parseInt) ){
        
    } 
    return parseInt
    }
    catch(e){
        return e
    }
    
}


function validateCount(value){
    let parseInt = parseCount(value)
    return parseInt
}


class Triangle{
    constructor(a, b ,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b > this.c){   
        }
        else{
            throw new Error("Треугольник с такими сторонами не существует")
            }
        if(this.b + this.c > this.a){
            }
        else{
                throw new Error("Треугольник с такими сторонами не существует")  
            }
            if(this.b + this.c > this.a){
            }
            if(this.a + this.c > this.b){
            }
        else{
                throw new Error("Треугольник с такими сторонами не существует")  
            }

        
    }

    getPerimeter(){
        return this.a + this.b + this.c
    }
    getArea(){
        let p = 0.5 * (this.a + this.b + this.c)
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) 
        return s.toFixed(2) 
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
               return "Ошибка! Треугольник не существует"
             }
        }
    }
}

