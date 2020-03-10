import {Button, Grid, Image} from "semantic-ui-react";
import React, {Component} from "react";

export default class Home1 extends Component {
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
                            Write a Rose, Bud, and Thorn to help your flower grow today!
                        </h4>
                    </Grid.Row>
                    <Grid.Row>
                        <Image src={'./rose2.png'} sizes='large'/>
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