class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null
    }
    addClock(time, callback, id){
        if (id === undefined){
            throw new Error('error text')
        }
        
        if(this.alarmCollection.some(element => element.id === id)){
           return console.error("Будильник")
        }
         
        this.alarmCollection.push({id, time, callback}) 
    }

    removeClock(id){
        if(this.alarmCollection.length >= id){
             this.alarmCollection.splice(this.alarmCollection.findIndex(element => element.id === id), 1) 
             return true
            }   
        else{
                return false
             }
             
        }

    getCurrentFormattedTime (){
        return new Date().toLocaleTimeString('en-US', { hour12: false, 
            hour: "numeric", 
            minute: "numeric"});
    
    }
    start() {
        function checkClock(clock) {
            if(this.getCurrentFormattedTime() == clock.time) {
            clock.callback();
            };
        };

        if (this.timerId === null) {
            this.timerId = setInterval(()=>{
            alarmCollection.forEach(function(){
            checkClock(clock)
            })
         }, 1000)
        }
    }

    stop(){
        if(this.timerId !== null){
            clearInterval(this.timerId)
            this.timerId = null
            }
        }
    printAlarms(){
        return this.alarmCollection.forEach(alarmCollection => console.log("Будильник №"  + alarmCollection.id + " заведен на "  + alarmCollection.time))
    }
    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length)
    }

}
