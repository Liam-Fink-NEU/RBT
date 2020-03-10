import React, { Component } from 'react';
import {Tab} from 'semantic-ui-react'
import Resources from './Resources.js';
import ExampleResources from './ExampleResources.js';
import LogIn from "./LogIn";
import CreateAccount from "./CreateAccount";
import Home1 from "./Home1";
import Home from "./Home";
import Rose from "./Rose";
import Bud from "./Bud";
import Thorn from "./Thorn";
import Archives from "./Archives";

const panes = [
    { menuItem: 'Log In', render: () => <Tab.Pane> <LogIn/> </Tab.Pane> },
    { menuItem: 'Register', render: () => <Tab.Pane> <CreateAccount/> </Tab.Pane> },
    { menuItem: 'Home', render: () => <Tab.Pane> <Home1/> </Tab.Pane> },
    { menuItem: 'Home2', render: () => <Tab.Pane> <Home/> </Tab.Pane> },
    { menuItem: 'Rose', render: () => <Tab.Pane> <Rose/> </Tab.Pane> },
    { menuItem: 'Bud', render: () => <Tab.Pane> <Bud/> </Tab.Pane> },
    { menuItem: 'Thorn', render: () => <Tab.Pane> <Thorn/> </Tab.Pane> },
    { menuItem: 'Archives', render: () => <Tab.Pane> <Archives/> </Tab.Pane> },
    { menuItem: 'Resources', render: () => <Tab.Pane> <Resources/> </Tab.Pane> },
    { menuItem: 'Example Resources', render: () => <Tab.Pane> <ExampleResources/> </Tab.Pane> },
];

//const TabExampleDefaultActiveIndex = () => (
//    <Tab panes={panes} defaultActiveIndex={0} />
//);

//export default TabExampleDefaultActiveIndex;
class TabExampleDefaultActiveIndex extends Component {
    state = { activeIndex: 0 };

    handleRangeChange = (e) => this.setState({ activeIndex: e.target.value });
    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

    render() {
        const { activeIndex } = this.state;

        return (
            <div>
                <div>activeIndex: {activeIndex}</div>
                <input
                    type='range'
                    max='8'
                    value={activeIndex}
                    onChange={this.handleRangeChange}
                />
                <Tab
                    panes={panes}
                    activeIndex={activeIndex}
                    onTabChange={this.handleTabChange}
                />
            </div>
        )
    }
}

export default TabExampleDefaultActiveIndex;