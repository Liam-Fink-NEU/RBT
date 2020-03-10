import React from 'react'
import {Button, Grid, Tab} from 'semantic-ui-react'
import RosePage from '/Users/liamfink/class-app/src/RosePage.js';
import WebData from "./WebData";
import LogIn from "./LogIn";
import CreateAccount from "./CreateAccount";
import Home1 from "./Home1";
import Home from "./Home";
import {SketchField, Tools} from 'react-sketch';

const panes = [
    { menuItem: 'Log In', render: () => <Tab.Pane> <LogIn/> </Tab.Pane> },
    { menuItem: 'Register', render: () => <Tab.Pane> <CreateAccount/> </Tab.Pane> },
    { menuItem: 'Home', render: () => <Tab.Pane> <Home1/> </Tab.Pane> },
    { menuItem: 'Home2', render: () => <Tab.Pane> <Home/> </Tab.Pane> },
    { menuItem: 'Rose', render: () =>
            <Tab.Pane> <Grid.Row><p>
                Click and hold to draw lines!
            </p> </Grid.Row>
                <Grid.Row>
                    <SketchField
                       height='980px'
                       backgroundColor='gray'
                       tool={Tools.Line}
                       lineColor='black'
                       lineWidth={3}/>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Tab.Pane> },
    { menuItem: 'Bud', render: () => <Tab.Pane> <RosePage/> </Tab.Pane> },
    { menuItem: 'Thorn', render: () => <Tab.Pane> <RosePage/> </Tab.Pane> },
    { menuItem: 'Archives', render: () => <Tab.Pane><WebData/></Tab.Pane> },
    { menuItem: 'Resources', render: () => <Tab.Pane> <RosePage/> </Tab.Pane> },
];

const TabExampleDefaultActiveIndex = () => (
    <Tab panes={panes} defaultActiveIndex={0} />
);

export default TabExampleDefaultActiveIndex;
