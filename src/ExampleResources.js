import {Button, Form, Grid, Header, Image, Modal, TextArea} from "semantic-ui-react";
import React, {Component} from "react";

export default class ExampleResources extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={3}>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <h1 className="ui blue header">
                                    Depression Resources
                                </h1>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    National Alliance on Mental Illness
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    National Institute of Mental Health
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                     CareForYourMind
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    Erika's Lighthouse
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    MoodNetwork
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <div className="ui bottom sidebar">
                        </div>
                    </Grid>
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "building icon">
                                    </i>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "pencil alternate icon">
                                    </i>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "calendar alternate icon">
                                    </i>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "address book icon">
                                    </i>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </header>
            </div>
        );
    }
}
