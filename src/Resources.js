import {Button,Grid} from "semantic-ui-react";
import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Resources extends Component {
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
                                    Resources
                                </h1>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/ExampleResources'>
                                <button className="huge ui button">
                                     Depression
                                </button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/ExampleResources'>
                                <button className="huge ui button">
                                    Anxiety
                                </button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/ExampleResources'>
                                <button className="huge ui button">
                                    Suicide Prevention
                                </button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/ExampleResources'>
                                <button className="huge ui button">
                                    University Health Services
                                </button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/ExampleResources'>
                                <button className="huge ui button">
                                    Stress
                                 </button>
                                 </Link>
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
