import React from 'react';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: []
        }
    }

    handleClick(e) {
        console.log(e.target.dataset.member);
    }

    render() {

        const id = 0;
        const number = id + 1; // id + 1
        const nameCompany = 'aaaaa';
        const complex = '-';
        const deadline = '80';
        const warrantyDate = '-';
        const paymentTerms = '-';
        const price = 0;
        const priceDiscount = 0;
        const priceTotal = 0;

        return (
            <>
                <section className="member">
                    <div className="member__block" onClick={this.handleClick} data-member={id} >
                        <h3>Участник #{number}</h3>
                        <h4> {nameCompany} </h4>
                        <div> {complex} </div>
                        <div> {deadline} </div>
                        <div> {warrantyDate} </div>
                        <div> {paymentTerms} </div>
                        <div> {price} </div>
                        <div> {priceDiscount} </div>
                        <div> {priceTotal} </div>
                    </div>
                </section>
            </>
        )
    }
}