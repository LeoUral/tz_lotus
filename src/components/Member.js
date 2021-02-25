import React from 'react';
import Store from '../store/Store';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: []
        }
    }

    handleClick(e) {
        console.log(e.target.parentElement.dataset.member);
    }

    render() {

        const id = this.props.id;
        const number = id + 1; // id + 1
        const nameCompany = this.props.name;
        const complex = '-';
        // симуляция ввода данных сторонними организациями
        let deadline = Math.floor(80 + 30 * Math.random());
        let warrantyDate = '24';
        let paymentTerms = '30%';
        let price = Math.floor(3125987 + 1000000 * Math.random());
        let priceDiscount = -25000;
        let priceTotal = price + priceDiscount;
        if (+Store.idCompany === +this.props.id) {
            deadline = warrantyDate = paymentTerms = price = priceDiscount = priceTotal = 0;
        }

        return (
            <>
                <div className="member__block" onClick={this.handleClick} data-member={id} >
                    <h4 >Участник №{number} </h4>
                    <h5 className="line-bottom" > {nameCompany} </h5>
                    <div className="bg-gray"> {complex} </div>
                    <div className="bg-gray"> <br></br> </div>
                    <div> {deadline} </div>
                    <div className="bg-gray"> {warrantyDate} </div>
                    <div> {paymentTerms} </div>
                    <div className="blue bg-gray"> {price} <span> руб.</span> </div>
                    <div className="red bg-gray"> {priceDiscount} <span> руб.</span></div>
                    <div className="green bg-gray"> {priceTotal} <span> руб.</span></div>
                </div>
            </>
        )
    }
}