import React from 'react';

export default class Welcome extends React.Component {


    render() {
        console.log(localStorage.getItem('verify'));


        return (
            <>
                <section className="welcome">
                    <div className="welcome__block">
                        <div className="welcome__block_image">
                            <img src={this.props.url} alt="logo" />
                        </div>
                        <h3> Добро пожаловать {this.props.agent}! </h3>
                        <div className="welcome__content">
                            <div><span> Ваша компания *{this.props.name}* допущена в систему LOTOS. </span></div>
                        </div>
                        <a href="/trading" className="welcome__link"> перейти на торговую площадку </a>
                    </div>
                </section>
            </>
        )
    }
}