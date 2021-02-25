import React from 'react';
import Timing from './Timing';

export default class ModalTrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            date: 0,
            garant: 0,
            condition: 0,
            price: 0,
            discount: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeGarant = this.handleChangeGarant.bind(this);
        this.handleChangeCondition = this.handleChangeCondition.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeDiscount = this.handleChangeDiscount.bind(this);
    }

    handleChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    handleChangeGarant(e) {
        this.setState({
            garant: e.target.value
        })
    }

    handleChangeCondition(e) {
        this.setState({
            condition: e.target.value
        })
    }

    handleChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleChangeDiscount(e) {
        this.setState({
            discount: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        console.log('CLICK CLICK');
    }

    render() {
        return (
            <>
                <div className="modal" style={{ display: this.state.show ? 'block' : 'none' }} >
                    <div className="modal__shadow"></div>
                    <form className="modal__window">
                        <h4>Форма для внесения изменений</h4>
                        <Timing />
                        <label className="modal__window-label" >
                            Срок изготовленияб дней:
                            <input type='text' placeholder="срок изготовления" onChange={this.handleChangeDate} />
                        </label>
                        <label className="modal__window-label">
                            Гарантийные обязательства, мес:
                            <input type='text' placeholder="гарантийные обязательства" onChange={this.handleChangeGarant} />
                        </label>
                        <label className="modal__window-label">
                            Условия оплаты:
                            <input type='text' placeholder="условия оплаты" onChange={this.handleChangeCondition} />
                        </label>
                        <label className="modal__window-label">
                            Стоимость изготовления:
                            <input type='text' placeholder="стоимость изготовления" onChange={this.handleChangePrice} />
                        </label>
                        <label className="modal__window-label">
                            Скидка:
                            <input type='text' placeholder="дискоунт" onChange={this.handleChangeDiscount} />
                        </label>
                        <input className='btn_input' type='submit' onClick={this.handleClick} placeholder='отпраить' />
                    </form>
                </div>
            </>
        )
    }

}