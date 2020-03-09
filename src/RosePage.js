import {Button, Form, Grid, Header, Image, Modal, TextArea} from "semantic-ui-react";
import CheckBox from "./CheckBox";
import React, {Component} from "react";

export default class RosePage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={3}>
                        <Grid.Row>
                            <p>
                                Welcome to Rose Bud Thorn!
                            </p>
                        </Grid.Row>
                    </Grid>
                    <Grid.Row>
                        <Image src={'./rose.png'} sizes='large'/>
                        <p>
                            <i className="hand peace icon">
                            </i>
                        </p>
                    </Grid.Row>
                    <Grid  columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Modal trigger={<Button color='blue'> I am a Text Button</Button>} closeIcon>
                                    <Modal.Header>Hey!</Modal.Header>
                                    <Modal.Content>
                                        <Modal.Description>
                                            <Header>You Clicked my button!</Header>
                                            <p>
                                                Try clicking the plus button next!
                                            </p>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='blue' className="ui icon button">
                                    <i color='blue' className= "cloud icon">
                                    </i>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <CheckBox/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Form>
                                    <TextArea placeholder='Fell free to write a post here!' />
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column>
                            <div className="ui compact menu">
                                <div className="ui simple dropdown item">
                                    How does this app look?
                                    <i className="dropdown icon">

                                    </i>
                                    <div className="menu">
                                        <div className="item">Amazing!</div>
                                        <div className="item">OutStanding!</div>
                                        <div className="item">Fantastic!</div>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color='blue' animated size='big'>
                                <Button.Content visible>Next</Button.Content>
                                <Button.Content hidden>
                                    To the draw page
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        <div className="ui bottom sidebar">

                        </div>
                    </Grid>
                </header>
            </div>
        );
    }
}
