import {Button, Grid} from "semantic-ui-react";
import React, {Component} from "react";

export default class Thorn extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={4}>
                        <Grid.Row>
                            <h1 className="ui huge grey inverted header">
                                Thorn
                            </h1>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Column>
                            <h4 className="ui grey inverted header">
                                Write down a couple of bad things that happened today:
                            </h4>
                            <Grid.Row>
                                <div className="ui form">
                                    <div className="field">
                                        <textarea>

                                        </textarea>
                                    </div>
                                </div>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={3}>
                        <Grid.Column>
                            <button className="massive ui icon button">
                                <i className="arrow alternate circle left icon"></i>
                            </button>
                        </Grid.Column>
                        <Grid.Column>
                            <button className="ui  button">
                                <i>
                                    Save For Later
                                </i>
                            </button>
                        </Grid.Column>
                        <Grid.Column>
                            <button className="massive ui icon button">
                                <i className="arrow alternate circle right icon"></i>
                            </button>
                        </Grid.Column>
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