import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Button, Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Archives extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column>
                                <Link to='/Home'>
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