import React from 'react'
import { Tab } from 'semantic-ui-react'
import RosePage from '/Users/liamfink/class-app/src/RosePage.js';
import WebData from "./WebData";
import {SketchField, Tools} from 'react-sketch';

const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane> <RosePage/> </Tab.Pane> },
    { menuItem: 'Draw Page', render: () => <Tab.Pane> <SketchField
                                                                   height='980px'
                                                                   backgroundColor='gray'
                                                                   tool={Tools.Line}
                                                                   lineColor='black'
                                                                   lineWidth={3}/></Tab.Pane> },
    { menuItem: 'Website API Info', render: () => <Tab.Pane><WebData/></Tab.Pane> },
];

const TabExampleDefaultActiveIndex = () => (
    <Tab panes={panes} defaultActiveIndex={0} />
);

export default TabExampleDefaultActiveIndex;
