import React from 'react';
import Store from '../store/Store';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target.parentElement.dataset.member);
        this.props.onHandleClick(e.target.parentElement.dataset.member);//* передаем id вверх
        Store.doChangeIdCompany(e.target.parentElement.dataset.member);
    }


    render() {

        const id = this.props.id;
        const number = id + 1; // id + 1
        const nameCompany = this.props.name;
        const complex = '-';
        //* симуляция ввода данных сторонними организациями
        this.deadline = Math.floor(80 + 30 * Math.random());
        this.warrantyDate = '24';
        this.paymentTerms = '30%';
        this.price = Math.floor(3125987 + 1000000 * Math.random());
        this.priceDiscount = -25000;
        this.priceTotal = this.price + this.priceDiscount;
        console.log(+Store.idCompany + ' --- ' + +this.props.id);
        if (+Store.idCompany === +this.props.id) {
            this.deadline = this.props.date;
            this.warrantyDate = this.props.garant;
            this.paymentTerms = this.props.condition;
            this.price = this.props.price;
            this.priceDiscount = this.props.discount;
            this.priceTotal = +this.price - +this.priceDiscount;
            console.log(this.deadline + ' ' + this.priceTotal);//test
        }

        return (
            <>
                <div className="member__block" onClick={this.handleClick} data-member={id} >
                    <h4 >Участник №{number} </h4>
                    <h5 className="line-bottom" > {nameCompany} </h5>
                    <div className="bg-gray"> {complex} </div>
                    <div className="bg-gray"> <br></br> </div>
                    <div> {this.deadline} </div>
                    <div className="bg-gray"> {this.warrantyDate} </div>
                    <div> {this.paymentTerms} </div>
                    <div className="blue bg-gray"> {this.price} <span> руб.</span> </div>
                    <div className="red bg-gray"> {this.priceDiscount} <span> руб.</span></div>
                    <div className="green bg-gray"> {this.priceTotal} <span> руб.</span></div>
                </div>
            </>
        )
    }
}