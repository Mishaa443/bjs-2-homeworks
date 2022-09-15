class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id){
            if (id === undefined){
            throw new Error('error text');
            }

            if(this.alarmCollection.some(element => element.id === id)){
                return console.error("Будильник")
             }
     
        this.alarmCollection.push({id, time, callback}) 
    }

    removeClock(id){
        let numberIndex = this.alarmCollection.findIndex(element => element.id === id);
        if(numberIndex !== -1){
             this.alarmCollection.splice(numberIndex, 1);
             return true
            }   
        else{
                return false
             }
             
        }

    getCurrentFormattedTime (){
        return new Date().toLocaleTimeString('en-US', 
            { hour12: false, 
            hour: "numeric", 
            minute: "numeric"});
    
    }
    start() {
        let checkClock = clock => { 
            if(this.getCurrentFormattedTime() == clock.time) {
            clock.callback();
            };
        };

        if (this.timerId === null) {
            this.timerId = setInterval(()=>{
            this.alarmCollection.forEach(function(){
            checkClock(clock);
            })
         }, 1000)
        }
    }

    stop(){
        if(this.timerId !== null){
            clearInterval(this.timerId)
            this.timerId = null;
            }
        }
    printAlarms(){
        return this.alarmCollection.forEach(alarmCollection => console.log("Будильник №"  + alarmCollection.id + " заведен на "  + alarmCollection.time))
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}

