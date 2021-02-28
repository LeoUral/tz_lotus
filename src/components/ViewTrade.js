import React from 'react';
import Member from './Member';
import TitleMember from './TitleMembers';

export default class ViewTrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            idCompany: '',
            membersTrade: []
        }
        this.viewCompanyTrade = this.viewCompanyTrade.bind(this);
        this.doHandleClick = this.doHandleClick.bind(this);
    }

    async getDataCompany() {

        let response = await fetch('../server/server.json');

        if (response.ok) {
            let dataCompany = await response.json();
            console.log('RESPONSE - OK');

            this.viewCompanyTrade(dataCompany);
            // console.log(dataCompany);//test
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
        // setTimeout(() => {
        //     console.log(this.state.idCompany + " <- ViewTrade change ID");//test
        // }, 150)
    }

    viewCompanyTrade(data) {
        this.arrayCompany = [];

        this.arrayCompany.push(
            <React.Fragment key={'a'}>
                <TitleMember />
            </React.Fragment>);

        if (localStorage.getItem('companyName')) {
            this.arrayCompany.push(
                <React.Fragment key={'b'}>
                    <Member
                        id={-1}
                        name={localStorage.getItem('companyName')}
                        onHandleClick={this.doHandleClick}
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
                    />
                </React.Fragment>
            )

        });
    }


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