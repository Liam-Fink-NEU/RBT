import {Button, Form, Grid, Header, Image, Modal, TextArea} from "semantic-ui-react";
import CheckBox from "./CheckBox";
import React, {Component} from "react";
import ImageFade from "./imagefade";

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={3}>
                        <Grid.Row>
                            <p>
                                Welcome User!
                            </p>
                        </Grid.Row>
                    </Grid>
                    <Grid.Row>
                        <h4 className="ui grey inverted header">
                            Great job writing your posts!
                            Come back tomorrow for your next Post!
                        </h4>
                    </Grid.Row>
                    <Grid.Row>
                        <Image src={'./rose.png'} sizes='large'/>
                    </Grid.Row>
                    <Grid  columns='equal'>
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
