import React, { Component } from 'react'
import { Button, Checkbox } from 'semantic-ui-react'

export default class CheckBox extends Component {
    state = { checked: false };
    toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }));

    render() {
        return (
            <div>
                <Button color = 'blue' onClick={this.toggle}>Check the box with me!</Button>
                <Checkbox
                    onChange={this.toggle}
                    checked={this.state.checked}
                />
            </div>
        )
    }
}