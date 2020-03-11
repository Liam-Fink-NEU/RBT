import {Grid} from "semantic-ui-react";
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class LogIn extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={3}>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <h1 className="ui huge blue header">
                                    Log In
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
                                <div className="ui big icon input">
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
                                <div className="ui big icon input">
                                    <input type="text" placeholder=""/>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>
                            <Link to='/Home1'>
                            <button className="huge ui button">
                                Log In
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
