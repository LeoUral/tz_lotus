import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderTrade from './HeaderTrade';
import InformationTextTrade from './InformationTextTrade';
import Timing from './Timing';

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
                </section>
            </>
        )
    }
}