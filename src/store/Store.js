import { makeAutoObservable } from 'mobx';

class Store {

    time = 0; // время, точка отсчета интервала
    currentTime = 0; // текущее время
    secTiming = 0;
    minuteTime = 0; //минуты до конца хода
    idCompany = -2; //активная компания

    constructor() {
        makeAutoObservable(this);
    }
    doChangeIdCompany(id) {
        this.idCompany = id;
    }

    startTime() {
        this.time = Number(new Date()) + 120000;
    }

    changeTime() {
        this.currentTime = Number(new Date());
    }

    doChangeTiming(data) {
        this.minuteTime = Math.floor(data / 60);
        this.secTiming = Math.floor(data % 60);
    }

    changeTiming() {
        if (this.time === 0) {
            this.startTime();
        }

        let interval = setInterval(() => {
            if (this.secTiming >= 0) {
                this.changeTime();
                this.changer = (Math.round((this.time - this.currentTime) / 1000))
                this.doChangeTiming(this.changer)
            } else {
                console.log('STOP'); //test
                clearInterval(interval);
            }
        }, 1000);
    }
}
export default new Store();