import React from 'react';


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            activity: '',
            agent: '',
            show: false,
            data: [],
            iconUrl: ''
        }

        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleClickRegistration = this.handleClickRegistration.bind(this);
        this.handleChageName = this.handleChageName.bind(this);
        this.handleChageActivity = this.handleChageActivity.bind(this);
        this.handleChageAgent = this.handleChageAgent.bind(this);
        this.verificationInput = this.verificationInput.bind(this);
        this.getIcon = this.getIcon.bind(this);
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

        if (agent < 1 && this.state.show === true) {
            inputData[2].classList.add('input-error');
        } else {
            inputData[2].classList.remove('input-error');
        }

        if (name < 1 || activity < 1 || (agent < 1 && this.state.show === true)) {
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

    async getIcon() {
        const category = 'science';//transportation, architecture, computer, electronic, network, industry, science
        // const url = 'https://iconfinder-api-auth.herokuapp.com/v4/icons/1814097';
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer Svvh55mogtsQVuOZQvjSEd3ai428StsXZdIuoUSViQECV1qTRrEJELm86Fq3ijLU'
            },
            contentType: 'application/json'
        };
        this.response = await fetch(`https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${category}&count=10`, options);
        this.setState({
            data: await this.response.json()
        })

        this.setState((state) => ({
            iconUrl: state.data.icons[0].raster_sizes[6].formats[0].preview_url // url icon
        }))

        console.log(this.state.data); //test
    }

    componentDidMount() {
        this.getIcon();
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
                            <select className="input-form" size="1"
                                onChange={this.handleChageActivity}>
                                <option value='' > Область деятельности </option>
                                <option value="industry" > Машиностроение </option>
                                <option value="transportation"> Транспортировка </option>
                                <option value="electronic"> Электронника </option>
                                <option value="architecture"> Строительство </option>
                                <option value="science"> Научная деятельность </option>
                                <option value="computer"> IT - технологии </option>
                            </select>
                        </label>
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