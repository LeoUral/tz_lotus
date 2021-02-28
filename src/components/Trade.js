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
            idCompany: null,
            date: 0,
            garant: 0,
            condition: 0,
            price: 0,
            discount: 0
        }
        this.doChangeShow = this.doChangeShow.bind(this);
        this.doChangeId = this.doChangeId.bind(this);
        this.doDataCompany = this.doDataCompany.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
        this.handleClickCloseTrade = this.handleClickCloseTrade.bind(this);
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
        setTimeout(() => {
            Store.transferDataUp(this.state); //* передача в STORE данные по торгам выбранной компании            
        }, 50);

    }

    handleClickUpdate() {
        console.log('CLICK CLICK CLICK update. No function');
    }

    handleClickCloseTrade() {
        // отправить данные и перейти на страницу /close
        document.location.href = '/close';
    }

    componentDidMount() {
        if (!(localStorage.getItem('verify') === 'true')) {
            document.location.href = '/';
        }
        Store.doChangeIdCompany(localStorage.getItem('idCompany')); // востанавливаем id компании 
        Store.changeTiming(); // запуск таймера, продолжение отсчета
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
                        />
                    </Container>
                    <Container fluid>
                        <div className="btn-container-trade">
                            <Button variant="success" className="btn-trade" >Чат {chat} </Button>
                            <Button variant="info" className="btn-trade" onClick={this.handleClickUpdate} >Обновить {update}</Button>
                            <Button variant="danger" className="btn-trade" onClick={this.handleClickCloseTrade}>Завершить торги {tradeBtn} </Button>
                            <Button variant="danger" className="btn-trade">Отчет {report}</Button>
                            <Button variant="secondary" className="btn-trade">Закрыть {close}</Button>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
}