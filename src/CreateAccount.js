import {Button, Form, Grid, Header, Image, Modal, TextArea, Calendar} from "semantic-ui-react";
import React, {Component} from "react";

export default class CreateAccount extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={3} >
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <h1 className="ui blue header">
                                    Create Your Account
                                </h1>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    Username:
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="ui icon input">
                                    <input type="text" placeholder=""/>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    Password:
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="ui icon input">
                                    <input type="text" placeholder=""/>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    Confirm Password:
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="ui icon input">
                                    <input type="text" placeholder=""/>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    Birth Date:
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="ui calendar" id="example4">
                                    <div className="ui input left icon">
                                        <i className="calendar icon"/>
                                        <input type="text" placeholder="MM/DD/YYYY"/>
                                    </div>
                                </div>
                                <br/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    Gender:
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <select className="ui dropdown">
                                    <option value="">Gender</option>
                                    <option value="2">Male</option>
                                    <option value="1">Female</option>
                                    <option value="0">Other</option>
                                </select>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>
                            <button className="huge blue ui button">
                                Create Account
                            </button>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                        <div className="ui bottom sidebar">

                        </div>
                    </Grid>
                </header>
            </div>
        );
    }
}
