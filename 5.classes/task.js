class PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
        fix(){
            this.state *=  1.5;
            return this.state
        }
        
        set state(number){
            if(number < 0){
                this._state = 0
            }
            else if(number > 100){
                this._state = 100
            }
            else{
                this._state = number
                return
            }
        }

        get state(){
            return this._state
        }

}


class Magazine extends PrintEditionItem{
    constructor(name, releaseDate,pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate,pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book"
        this.author = author
    }
}
class NovelBook  extends Book{
    constructor(author, name, releaseDate,pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
       
    }
}
class FantasticBook  extends Book{
    constructor(name, releaseDate,pagesCount, author){
        super(name, releaseDate, pagesCount,author);
        this.type = "fantastic"
        
    }
}
class DetectiveBook  extends Book{
    constructor(name, releaseDate,pagesCount, author){
        super(name, releaseDate, pagesCount,author);
        this.type = "detective"
        
    }
}


class Library extends PrintEditionItem {
    constructor(name){
        super()
        this.name = name;
        this.books = [];
    }  


    addBook(book) {
        if(this.state > 30){
            this.books.push(book);
        } else{
            return;
        }

    }
    
    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        if(findBook !== undefined) {
          return findBook;
        }else{
          return null;
        }
      }
      giveBookByName(bookName) {
        let indexBook = this.books.findIndex(item => item.name === bookName);
        if(indexBook !== -1) {
          let giveBook = this.books[indexBook];
          this.books.splice(indexBook, 1);
          return giveBook;
        }else{
          return null;
        }
      }
    }    






