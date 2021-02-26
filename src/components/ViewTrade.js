import React from 'react';
import Member from './Member';
import TitleMember from './TitleMembers';

export default class ViewTrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            idCompany: ''
        }
        this.viewCompanyTrade = this.viewCompanyTrade.bind(this);
        this.doHandleClick = this.doHandleClick.bind(this);
    }

    async getDataCompany() {

        let response = await fetch('../server/server.json');

        if (response.ok) {
            let dataCompany = await response.json();

            this.viewCompanyTrade(dataCompany);
            console.log(dataCompany);//test
            this.setState({
                data: dataCompany
            })
        } else {
            console.log('ERROR FETCH');
        }
    }

    doHandleClick(id) {
        this.setState({
            idCompany: id
        })
        this.props.onChangeIdCompany(id);
        setTimeout(() => {
            console.log(this.state.idCompany + " <- ViewTrade change ID");//test

        }, 100)
    }

    viewCompanyTrade(data) {
        this.arrayCompany = [];

        this.arrayCompany.push(
            <React.Fragment key={data[0].name}>
                <TitleMember />
            </React.Fragment>);

        if (localStorage.getItem('companyName')) {
            this.arrayCompany.push(
                <React.Fragment key={localStorage.getItem('companyName')}>
                    <Member
                        id={-1}
                        name={localStorage.getItem('companyName')}
                        onHandleClick={this.doHandleClick}
                        date={this.props.date}
                        garant={this.props.garant}
                        condition={this.props.condition}
                        price={this.props.price}
                        discount={this.props.discount}
                    />
                </React.Fragment>
            )

        }
        data.forEach(element => {
            this.arrayCompany.push(
                <React.Fragment key={element.id}>
                    <Member
                        id={element.id}
                        name={element.name}
                        onHandleClick={this.doHandleClick}
                        date={this.props.date}
                        garant={this.props.garant}
                        condition={this.props.condition}
                        price={this.props.price}
                        discount={this.props.discount}
                    />
                </React.Fragment>
            )

        });
    }

    //TODO переданное состояние state передать так же через функцию в Member
    componentDidMount() {
        this.getDataCompany();
    }

    render() {

        const companyTrade = this.arrayCompany;
        return (
            <>
                <section className="member">
                    {companyTrade}
                </section>
            </>
        )
    }
}