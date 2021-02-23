import React from 'react';

export default class ViewTrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 
}

    }


    async getDataCompanyFromServer() {

        let response = await fetch('../server/server.json');

        if (response.ok) {
            let dataCompany = await response.json();

            console.log(dataCompany);
            this.setState({
                data: dataCompany
            })
        } else {
            console.log('ERROR FETCH');
        }

    }

    render() {
        return (
            <>
            </>
        )
    }
}