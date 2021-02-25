import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Store from '../store/Store';
import HeaderTrade from './HeaderTrade';
import InformationTextTrade from './InformationTextTrade';
import Timing from './Timing';
import ViewTrade from './ViewTrade';
import chat from './svgConstant/ConstantSvgChat';
import close from './svgConstant/ConstantSvgClose';
import report from './svgConstant/ConstantSvgReport';
import tradeBtn from './svgConstant/ConstantSvgTrade';
import update from './svgConstant/ConstantSvgUpdate';
import ModalTrade from './ModalTrade';

export default class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            idCompany: '',
            date: 0,
            garant: 0,
            condition: 0,
            price: 0,
            discount: 0
        }
        this.doChangeShow = this.doChangeShow.bind(this);
        this.doChangeId = this.doChangeId.bind(this);
        this.doDataCompany = this.doDataCompany.bind(this);
    }

    doChangeShow() {
        this.setState({
            show: !this.state.show
        })
    }
    doChangeId(id) {
        console.log(id + ' << - ID in Trade');//test
        this.setState({
            idCompany: id
        })
        this.doChangeShow();
    }

    doDataCompany(data) {
        this.setState({
            date: data.date,
            garant: data.garant,
            condition: data.condition,
            price: data.price,
            discount: data.discount
        })
    }

    componentDidMount() {
        if (!(localStorage.getItem('verify') === 'true')) {
            document.location.href = '/';
        }
        Store.doChangeIdCompany(localStorage.getItem('idCompany')); // востанавливаем id компании 
        Store.changeTiming();
    }

    componentWillUnmount() {
        localStorage.setItem('verify', false);
    }

    render() {

        return (
            <>
                <section>
                    <ModalTrade
                        show={this.state.show}
                        onChangeShow={this.doChangeShow}
                        onDataCompany={this.doDataCompany} />
                    <Container>
                        <HeaderTrade />
                    </Container>
                    <InformationTextTrade />
                    <div className="time-block" >
                        <Timing />
                    </div>
                    <Container className="company-block">
                        <ViewTrade
                            onChangeIdCompany={this.doChangeId}
                            date={this.state.date}
                            garant={this.state.garant}
                            condition={this.state.condition}
                            price={this.state.price}
                            discount={this.state.discount}
                        />
                    </Container>
                    <Container fluid>
                        <div className="btn-container-trade">
                            <Button variant="success" className="btn-trade" >Чат {chat} </Button>
                            <Button variant="info" className="btn-trade">Обновить {update}</Button>
                            <Button variant="danger" className="btn-trade">Завершить торги {tradeBtn} </Button>
                            <Button variant="danger" className="btn-trade">Отчет {report}</Button>
                            <Button variant="secondary" className="btn-trade">Закрыть {close}</Button>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
}