import { makeAutoObservable } from 'mobx';


class Store {

    // time = 0; // время, точка отсчета интервала, переснесена в localStorage
    currentTime = 0; // текущее время
    secTiming = 0;
    minuteTime = 0; //минуты до конца хода
    idCompany = -2; //активная компания
    dataCompany = {
        date: 0,
        garant: 0,
        condition: 0,
        price: 0,
        discount: 0
    }

    constructor() {
        makeAutoObservable(this);
    }

    transferDataUp(data) {
        this.dataCompany = data;
    }

    doChangeIdCompany(id) {
        this.idCompany = id;
        // console.log(id + '<<<<<< id Company');//test
    }

    startTime() {
        // this.time = Number(new Date()) + 120000;
        localStorage.setItem('time', Number(new Date()) + 120000);
    }

    changeTime() {
        this.currentTime = Number(new Date());
    }

    doChangeTiming(data) {
        this.minuteTime = Math.floor(data / 60);
        this.secTiming = Math.floor(data % 60);
    }


    changeTiming() {
        if (localStorage.getItem('time') === '0') {
            this.startTime();
        }

        let interval = setInterval(() => {
            if (this.secTiming >= 0) {
                this.changeTime();
                this.changer = (Math.round((Number(localStorage.getItem('time')) - this.currentTime) / 1000))
                this.doChangeTiming(this.changer)
            } else {
                console.log('STOP'); //test                
                clearInterval(interval);
                setTimeout(() => {
                    document.location.href = '/close';
                }, 1000);
            }
        }, 1000);
    }
}
export default new Store();