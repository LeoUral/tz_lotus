import React from 'react';
import Store from '../store/Store';
import DataTrade from './DataTrade';

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

        return (
            <>
                <div className="member__block" onClick={this.handleClick} data-member={id} >
                    <h4 >Участник №{number} </h4>
                    <h5 className="line-bottom" > {nameCompany} </h5>
                    <div className="bg-gray"> {complex} </div>
                    <div className="bg-gray"> <br></br> </div>
                    <DataTrade
                        id={this.props.id}
                    />
                </div>
            </>
        )
    }
}