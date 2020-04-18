import React, { Component } from 'react';
import {Button, Grid, Message, Table, Icon, Label, Menu} from "semantic-ui-react";
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
                    <Grid columns={3}>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <h1 className="ui huge grey inverted header">
                                    Archives
                                </h1>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Row>

                        </Grid.Row>
                    </Grid>
                    <Grid Columns={1}>
                        <Grid.Column>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Date</Table.HeaderCell>
                                    <Table.HeaderCell>Rose</Table.HeaderCell>
                                    <Table.HeaderCell>Bud</Table.HeaderCell>
                                    <Table.HeaderCell>Thorn</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        3/14/20
                                    </Table.Cell>
                                    <Table.Cell>
                                        I met my dog for the first time!
                                    </Table.Cell>
                                    <Table.Cell>
                                        I get to be home with my family soon!
                                    </Table.Cell>
                                    <Table.Cell>
                                        My dog nipped me when we were playing
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        3/7/20
                                    </Table.Cell>
                                    <Table.Cell>
                                        I did really well on my first exam!
                                    </Table.Cell>
                                    <Table.Cell>
                                        I will meet my dog next week!
                                    </Table.Cell>
                                    <Table.Cell>
                                        I am still worried about my up coming exams
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        3/5/20
                                    </Table.Cell>
                                    <Table.Cell>
                                        I was very productive in my studying!
                                    </Table.Cell>
                                    <Table.Cell>
                                        I am almost done with exams
                                    </Table.Cell>
                                    <Table.Cell>
                                        I am over stressing and it is causing me to not eat as much as I should
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>

                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='4'>
                                        <Menu floated='right' pagination>
                                            <Menu.Item as='a' icon>
                                                <Icon name='chevron left' />
                                            </Menu.Item>
                                            <Menu.Item as='a'>1</Menu.Item>
                                            <Menu.Item as='a'>2</Menu.Item>
                                            <Menu.Item as='a'>3</Menu.Item>
                                            <Menu.Item as='a'>4</Menu.Item>
                                            <Menu.Item as='a' icon>
                                                <Icon name='chevron right' />
                                            </Menu.Item>
                                        </Menu>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                        </Grid.Column>
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