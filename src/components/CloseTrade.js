import React from 'react';
import { Container, Nav, Navbar, Jumbotron } from 'react-bootstrap';

export default class CloseTrade extends React.Component {


    doClearLocalStorage() {
        localStorage.removeItem('verify');
        localStorage.removeItem('reWrite');
        localStorage.setItem('time', 0);
    }

    render() {

        this.doClearLocalStorage();

        return (
            <>
                <Container>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link href="/">LOG IN</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>

                    <Jumbotron>
                        <h1>Торги окончены, Ваши данные по торгам отправлены</h1>
                        <p>
                            Для получения результатов торгов свяжитесь с представителем компании LOTUS по телефону +7 343 ХХХ ХХ ХХ
                        </p>
                    </Jumbotron>
                </Container>
            </>
        )
    }
}