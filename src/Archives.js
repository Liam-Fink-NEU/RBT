import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class Archives extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </header>
            </div>
        );
    }
}