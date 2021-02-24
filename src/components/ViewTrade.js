import React from 'react';
import Member from './Member';
import TitleMember from './TitleMembers';

export default class ViewTrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.viewCompanyTrade = this.viewCompanyTrade.bind(this);
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