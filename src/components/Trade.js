import React from 'react';
import { Container } from 'react-bootstrap';
import Store from '../store/Store';
import HeaderTrade from './HeaderTrade';
import InformationTextTrade from './InformationTextTrade';
import Timing from './Timing';
import ViewTrade from './ViewTrade';

export default class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }

    }

    componentDidMount() {
        if (!(localStorage.getItem('verify') === 'true')) {
            document.location.href = '/';
        }
        Store.doChangeIdCompany(localStorage.getItem('idCompany')); // востанавливаем id компании 
    }

    componentWillUnmount() {
        localStorage.setItem('verify', false);
    }

    render() {

        return (
            <>
                <section>
                    <Container>
                        <HeaderTrade />
                    </Container>
                    <InformationTextTrade />
                    <div className="time-block" >
                        <Timing />
                    </div>
                    <Container className="company-block">
                        <ViewTrade />
                    </Container>
                </section>
            </>
        )
    }
}