import {Button, Form, Grid, Header, Image, Modal, TextArea} from "semantic-ui-react";
import React, {Component} from "react";
import { Link } from 'react-router-dom';

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
                                    Depression Hotline 1-800-950-6264
                                </h1>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                NAMI is the largest grassroots organization devoted to improving the lives 
                                of those affected by mental illness. Through various programs, it aims to 
                                change public perception about mental illness, help its members manage mental 
                                illness and build up family relationships.
                                </p>
                            </Grid.Column>
                        </Grid.Row> 
                        <div className="ui bottom sidebar">
                        </div>
                    </Grid>
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column>
                            <Link to='/Home'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "building icon">
                                    </i>
                                    Home
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/Rose'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "pencil alternate icon">
                                    </i>
                                    Write
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/Archives'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "calendar alternate icon">
                                    </i>
                                    Archives
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/Resources'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "address book icon">
                                    </i>
                                    Resources
                                </Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </header>
            </div>
        );
    }
}
