import React from 'react';

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
        const deadline = '80';
        const warrantyDate = '24';
        const paymentTerms = '30%';
        const price = 3125987;
        const priceDiscount = -25000;
        const priceTotal = 3100987;

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