import {Grid, Input, Button} from "semantic-ui-react";
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class CreateAccount extends Component {
    state={
        passwordValue: "",
        passwordConfirmValue: "",
        error: ""
    };
    constructor(props) {
        super(props);
        this.setPassword = this.setPassword.bind(this);
        this.setPasswordConfirm = this.setPasswordConfirm.bind(this);
        this.comparePassword = this.comparePassword.bind(this);
    }
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
                                    <Input type= {"password"} value={this.state.passwordValue} onChange={this.setPassword}/>
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
                                    <Input type= {"password"} value={this.state.passwordConfirmValue} onChange={this.setPasswordConfirm}/>
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
                            <Link to='/Home1'>
                                <Button className="huge blue ui button" onClick={this.comparePassword}>
                                    Create Account
                                </Button>
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
    setPassword(value) {
        this.setState({passwordValue : value.target.value});
        console.log(this.state.passwordValue);
    }
    setPasswordConfirm(value) {
        this.setState({passwordConfirmValue : value.target.value});
    }
    comparePassword() {
        alert(this.state.passwordValue === this.state.passwordConfirmValue);

    }
}
