import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";

export default class ImageFade extends Component {
    state = { visible: false };

    toggleVisibility = () =>
        this.setState((prevState) => ({ visible: !prevState.visible }));

    render() {
        const { visible } = this.state;

        return (
            <div>
                <Popup content={visible ? 'hide the secret image' : 'reveal the secret image'} trigger={<Button
                    color={'blue'}
                    content='Super Secret Button'
                    onClick={this.toggleVisibility}
                />}/>
                <Divider hidden />
                <Transition visible={visible} animation='scale' duration={500}>
                    <Image size='small' src='./rose.png' />
                </Transition>
            </div>
        )
    }
}