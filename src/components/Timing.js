import { observer } from 'mobx-react';
import Store from '../store/Store';

const Timing = observer(() => {

    Store.changeTiming();

    let seconds = Store.secTiming;
    let minutes = Store.minuteTime;

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <>
            <div className="timing">
                <span> {minutes} : {seconds} сек </span>
                <span>
                    <svg width="25" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M19,6.76V2H6V6.76A4,4,0,0,0,7.17,9.59L9.59,12,7.17,14.41A4.06,4.06,0,0,0,6,17.24V22H19V17.24a4.06,4.06,0,0,0-1.17-2.83L15.41,12l2.42-2.41A4,4,0,0,0,19,6.76ZM17,20H8V17.24A2,2,0,0,1,8.45,16h8.1A2,2,0,0,1,17,17.24ZM17,6.76a2,2,0,0,1-.59,1.41l-2.76,2.77a1.5,1.5,0,0,0,0,2.12l.94.94H10.41l.94-.94a1.5,1.5,0,0,0,0-2.12L8.59,8.17A2,2,0,0,1,8,6.76V4h9Z" /></svg>
                </span>
            </div>
        </>
    )
})
export default Timing;