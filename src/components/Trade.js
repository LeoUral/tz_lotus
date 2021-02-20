import React from 'react';
import Timing from './Timing';

export default class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }

    }


    componentDidMount() {
    }

    componentWillUnmount() {
        localStorage.setItem('verify', false);
    }

    render() {

        if (localStorage.getItem('verify') === false || localStorage.getItem('verify') === null) {
            document.location.href = '/';
        }
        // console.log(localStorage.getItem('verify'));//test

        // const time = this.state.time;

        return (
            <>
                <section>
                    <div>
                        Time ==  <Timing />
                    </div>
                </section>
            </>
        )
    }
}