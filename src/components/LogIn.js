import React from 'react';
import ChoiceIcon from './ChoiceIcon';
import IconBlock from './IconBlock';


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            activity: '',
            agent: '',
            show: false,
            dataCategory: '', // icon category
            iconUrl: ''
        }

        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleClickRegistration = this.handleClickRegistration.bind(this);
        this.handleChageName = this.handleChageName.bind(this);
        this.handleChageActivity = this.handleChageActivity.bind(this);
        this.handleChageAgent = this.handleChageAgent.bind(this);
        this.verificationInput = this.verificationInput.bind(this);
        this.doChangeCategory = this.doChangeCategory.bind(this);
    }

    handleClickSubmit(e) {
        e.preventDefault();
        console.log('click  --> LOG IN');//test
        this.verificationInput();
    }
    verificationInput() {

        const name = this.state.name.length;
        const activity = this.state.activity.length;
        const agent = this.state.agent.length;
        const category = this.state.dataCategory;
        const inputData = document.querySelectorAll('.input-form')

        if (name < 1) {
            inputData[0].classList.add('input-error');
        } else {
            inputData[0].classList.remove('input-error');
        }

        if (activity < 1) {
            inputData[1].classList.add('input-error');
        } else {
            inputData[1].classList.remove('input-error');
        }

        if (category < 1) {
            inputData[2].classList.add('input-error');
        } else {
            inputData[2].classList.remove('input-error');
        }

        if (agent < 1 && this.state.show === true) {
            inputData[3].classList.add('input-error');
        } else {
            inputData[3].classList.remove('input-error');
        }

        if (name < 1 || activity < 1 || category < 1 || (agent < 1 && this.state.show === true)) {
            console.log('Verification => ERROR'); //test
        } else {
            console.log('Verification => OK'); //test
        }

    }

    handleClickRegistration() {
        this.setState({
            show: !this.state.show
        })
    }
    handleChageName(e) {
        console.log(e.target.value);//test
        this.setState({
            name: e.target.value
        })
    }

    handleChageActivity(e) {
        console.log(e.target.value);//test
        this.setState({
            activity: e.target.value
        })
    }

    handleChageAgent(e) {
        console.log(e.target.value);//test
        this.setState({
            agent: e.target.value
        })
    }

    doChangeCategory(category) {
        this.setState({
            dataCategory: category
        })
    }

    componentDidMount() {

    }

    render() {

        const titleIn = 'Вход в систему LOTUS';
        const titleReg = 'Регистрация';
        const show = this.state.show;
        const iconUrl = this.state.iconUrl;

        return (
            <>
                <section className="log-in">
                    <div className="logo"> <img src={iconUrl} alt="icon" /></div>
                    <form className="form">
                        <h2> {show ? titleReg : titleIn} </h2>
                        <label className="label">
                            <span>Название фирмы: </span>
                            <input className="input-form" type="text" placeholder="название фирмы"
                                onChange={this.handleChageName} />
                        </label>
                        <label className="label">
                            <span>Область деятельности: </span>
                            <input className="input-form" type="text" placeholder="область деятельности"
                                onChange={this.handleChageActivity} />
                        </label>
                        <IconBlock
                            onChangeCategory={this.doChangeCategory}
                        />
                        {this.state.dataCategory.length < 1 ? '' : <ChoiceIcon category={this.state.dataCategory} />}

                        <label className="label" style={{ visibility: show ? 'visible' : 'hidden' }} >
                            <span>ФИО представителя: </span>
                            <input className="input-form" type="text" placeholder="представитель"
                                onChange={this.handleChageAgent} />
                        </label>
                        <input className="btn btn-submit" type="submit"
                            value={show ? 'РЕГИСТРАЦИЯ' : 'ВХОД'}
                            onClick={this.handleClickSubmit} />
                    </form>
                    <button className="btn btn-reg"
                        onClick={this.handleClickRegistration}>
                        {show ? 'вход' : 'зарегистрироваться'}
                    </button>
                </section>
            </>
        )
    }
}