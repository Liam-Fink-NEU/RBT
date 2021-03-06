import {Button, Form, Grid, Header, Image, Modal, TextArea} from "semantic-ui-react";
import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Bud extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={4}>
                        <Grid.Row>
                            <h1 className="ui huge grey inverted header">
                                Bud
                            </h1>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Column>
                            <h4 className="ui grey inverted header">
                                Write down a couple of things you are looking forward to in the future:
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
                        <Link to='/Rose'>
                            <button className="massive ui icon button">
                                <i className="arrow alternate circle left icon"></i>
                            </button>
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link to='/Home'>
                            <button className="ui  button">
                                <i>
                                    Save For Later
                                </i>
                            </button>
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                        <Link to='/Thorn'>
                            <button className="massive ui icon button">
                                <i className="arrow alternate circle right icon"></i>
                            </button>
                            </Link>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column>
                            <Link to='/Home1'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "building icon">
                                    </i>
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/Rose'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "pencil alternate icon">
                                    </i>
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/Archives'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "calendar alternate icon">
                                    </i>
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column>
                            <Link to='/Resources'>
                                <Button color='blue' className="massive ui icon button">
                                    <i color='blue' className= "address book icon">
                                    </i>
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
