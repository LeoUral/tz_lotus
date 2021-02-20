import { makeAutoObservable } from 'mobx';

class Store {

    time = 0; // время, точка отсчета интервала
    currentTime = 0; // текущее время
    timing = 0;

    constructor() {
        makeAutoObservable(this);
    }

    startTime() {
        this.time = new Date();
    }

    changeTime() {
        this.currentTime = new Date();
    }

    changeTiming(time) {
        this.timing = time;
    }
}
export default new Store();