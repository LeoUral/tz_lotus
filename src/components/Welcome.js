import React from 'react';

export default class Welcome extends React.Component {

    render() {

        return (
            <>
                <section className="welcome">
                    <div className="welcome__block">
                        <h3> Добро пожаловать {this.props.agent}! </h3>
                        <div className="welcome__content">
                            <div> <img src={this.props.url} alt="logo" /> </div>
                            <div><span> Ваша компания *{this.props.name}* допущена в систему LOTOS. </span></div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}