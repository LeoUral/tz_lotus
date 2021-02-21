import React from 'react';
import { Container } from 'react-bootstrap';

export default class HeaderTrade extends React.Component {

    render() {
        const number = '2033564 (09.11.2020 07:00)'
        return (
            <>
                <Container fluid >
                    <header className='header-trade'>
                        <div><span>Ход торгов на аппарат ЛОТОС №{number}</span></div>
                    </header>
                </Container>
            </>
        )
    }
}