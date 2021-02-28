import React from 'react';
import Store from '../store/Store';
import LogIn from './LogIn';
import Welcome from './Welcome';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCompany: '',
            activityCompany: '',
            agentCompany: '',
            urlIconCompany: '',
            showRegistartion: false,
            verify: false
        }

        this.doSendDataCompany = this.doSendDataCompany.bind(this);
        this.getDataCompanyFromServer = this.getDataCompanyFromServer.bind(this);
        this.verivicationCompany = this.verivicationCompany.bind(this);
        this.addNewCompany = this.addNewCompany.bind(this);
    }

    doSendDataCompany(data) {
        this.setState({
            nameCompany: data.name,
            activityCompany: data.activity,
            agentCompany: data.agent,
            urlIconCompany: data.iconUrl,
            showRegistartion: data.show
        });
        // setTimeout(() => { console.log(this.state); });//test
        this.getDataCompanyFromServer();
    }

    async getDataCompanyFromServer() {

        let response = await fetch('../server/server.json');

        if (response.ok) {
            let dataCompany = await response.json();
            console.log('RESPONSE - OK');
            // console.log(dataCompany);//test
            this.verivicationCompany(dataCompany);
        } else {
            console.log('ERROR FETCH');
        }

    }

    verivicationCompany(data) {

        const state = this.state;

        data.forEach(element => {
            if (element.name === state.nameCompany && element.activity === state.activityCompany) {
                this.setState({
                    idCompany: element.id,
                    nameCompany: element.name,
                    activityCompany: element.activity,
                    agentCompany: element.agent,
                    urlIconCompany: element.logoUrl,
                    verify: true
                })
                Store.doChangeIdCompany(element.id);
                localStorage.setItem('idCompany', element.id);
                return;
            }
        });

        if (state.showRegistartion) this.addNewCompany();
    }

    addNewCompany() {
        this.setState({
            nameCompany: localStorage.getItem('companyName'),
            activityCompany: localStorage.getItem('companyActivity'),
            agentCompany: localStorage.getItem('companyAgent'),
            urlIconCompany: localStorage.getItem('companyUrl'),
            verify: true
        })
        Store.doChangeIdCompany(-1);
        localStorage.setItem('idCompany', -1);
    }

    render() {
        const verify = this.state.verify;

        return (
            <>
                <div>
                    {verify ?
                        <Welcome
                            name={this.state.nameCompany}
                            agent={this.state.agentCompany}
                            url={this.state.urlIconCompany} />
                        :
                        <LogIn
                            onSendDataCompany={this.doSendDataCompany} />}
                </div>
            </>
        )
    }
}