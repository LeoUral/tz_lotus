import React from 'react';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: []
        }
    }

    render() {

        return (
            <>
                <section className="member">
                    <h3>Member #1</h3>
                    <h4>Member Company</h4>
                    <div> - </div>
                    <div> Number </div>
                    <div> Number </div>
                    <div> Number </div>
                    <div> Price </div>
                    <div> Price </div>
                    <div> Price </div>
                </section>
            </>
        )
    }
}