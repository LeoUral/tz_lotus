import React from 'react';
import Timing from './Timing';

export default class ModalTrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleClick = this.handleClick.bind(this);
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
                        <Timing />
                        <label>
                            Срок изготовленияб дней:
                            <input type='text' placeholder="срок изготовления" />
                        </label>
                        <label>
                            Гарантийные обязательства, мес:
                            <input type='text' placeholder="гарантийные обязательства" />
                        </label><label>
                            Условия оплаты:
                            <input type='text' placeholder="условия оплаты" />
                        </label><label>
                            Стоимость изготовления:
                            <input type='text' placeholder="стоимость изготовления" />
                        </label><label>
                            Скидка:
                            <input type='text' placeholder="дискоунт" />
                        </label>
                        <input type='submint' onClick={this.handleClick} placeholder='отпраить' />
                    </form>
                </div>
            </>
        )
    }

}