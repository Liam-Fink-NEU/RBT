import {Button, Form, Grid, Header, Image, Modal, TextArea} from "semantic-ui-react";
import React, {Component} from "react";

export default class Rose extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={4}>
                        <Grid.Row>
                            <h1 className="ui huge grey inverted header">
                                Rose
                            </h1>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Form>
                                <TextArea placeholder='Fell free to write a post here!' />
                            </Form>
                        </Grid.Row>
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
