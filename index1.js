$(function () {


//轮循
    class Park{
        constructor(names){
            this.updateTime=1000;
            this.age=18;
        }
        updateTime(){
            this.timeElement=$('.time');
            this.dataElement=$('.date');
            let that=this;
            getCurrentTime.call(this);
            setInterval(getCurrentTime.bind(this),this.time)
            function getCurrentTime() {
                let time=new Date();
                let year=time.getFullYear(),
                    month=time.getMonth()+1,
                    date=time.getDay(),
                    hours=time.getHours(),
                    min=time.getMinutes(),
                    sec=time.getSeconds();

                hours=hours >=10 ? hours:'0'+hours;
                min=min>=10 ? min:'0'+min;
                sec=sec>=10 ? sec:'0'+sec;

                this.timeElement.text(hours+':'+min);
            }
        }
    }

    let park=new Park();
    park.updateTime();

})
