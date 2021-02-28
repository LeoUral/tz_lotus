import { observer } from 'mobx-react';
import Store from '../store/Store';

const DataTrade = observer((props) => {

    let data = Store.dataCompany; //данные по торгам    

    //* симуляция ввода данных по торгам других организаций
    let deadline = Math.floor(80 + 30 * Math.random());
    let warrantyDate = '24';
    let paymentTerms = '30%';
    let price = Math.floor(3125987 + 1000000 * Math.random());
    let priceDiscount = -25000;
    let priceTotal = price + priceDiscount;
    // console.log(+Store.idCompany + ' --- ' + +props.id);//test

    //данные по торгам выбранной компании
    if (+Store.idCompany === +props.id) {
        deadline = data.date;
        warrantyDate = data.garant;
        paymentTerms = data.condition;
        price = data.price;
        priceDiscount = data.discount * -1;
        priceTotal = +price + +priceDiscount;
        // console.log(deadline + ' ' + priceTotal);//test
    }

    return (
        <>
            <div>
                <div> {deadline} </div>
                <div className="bg-gray"> {warrantyDate} </div>
                <div> {paymentTerms} </div>
                <div className="blue bg-gray"> {price} <span> руб.</span> </div>
                <div className="red bg-gray"> {priceDiscount} <span> руб.</span></div>
                <div className="green bg-gray"> {priceTotal} <span> руб.</span></div>
            </div>
        </>
    )
})

export default DataTrade;
