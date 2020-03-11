import {Grid} from "semantic-ui-react";
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class CreateAccount extends Component {
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
                                    Age:
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
                                    Gender:
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
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>
                            <Link to='/Home1'>
                            <button className="huge blue ui button">
                                Create Account
                            </button>
                            </Link>
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
