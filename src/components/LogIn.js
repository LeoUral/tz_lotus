import React from 'react';

export default class LogIn extends React.Component {


    handleOnClickSubmit(e) {
        e.preventDefault();
        console.log('click  --> LOG IN');//test
    }
    handleClickRegistration() {
        console.log('click --> REGISTRATION');//test
    }



    render() {
        return (
            <>
                <section className="log-in">
                    <form className="form">
                        <h2> Вход в систему LOTUS </h2>
                        <label className="label">
                            <span>Название фирмы: </span>
                            <input className="input-form" type="text" placeholder="название фирмы" />
                        </label>
                        <label className="label">
                            <span>Область деятельности: </span>
                            <input className="input-form" type="text" placeholder="область деятельности" />
                        </label>
                        <input className="btn btn-submit" type="submit" value="ВХОД" onClick={this.handleOnClickSubmit} />
                    </form>
                    <button className="btn btn-reg" onClick={this.handleClickRegistration} >зарегистрироваться</button>
                </section>
            </>
        )
    }
}