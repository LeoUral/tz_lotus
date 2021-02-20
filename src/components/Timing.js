import { observer } from 'mobx-react';
import Store from '../store/Store';

const Timing = observer(() => {

    Store.startTime();
    let timeOriginal = Number(Store.time) + 120000;
    let time = 0;
    let mSec = 0;


    setInterval(() => {
        Store.changeTime();
        time = Number(Store.currentTime);
        mSec = (Math.round(timeOriginal - time));
        console.log(mSec);
    }, 1000)

    let timer = mSec;

    return (
        <>
            <div>
                {timer}
            </div>
        </>
    )
})
export default Timing;