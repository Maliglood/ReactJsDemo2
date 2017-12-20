import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CurrentTimeView } from "./currentTime";

export interface AppProps { innerHtml: string; buttonText: string; }
export interface AppState { buttonText: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class AppView extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        this.state = { buttonText: props.buttonText };

        this.press = this.press.bind(this);
    }
    press() {
        this.setState({ buttonText: "You clicked button" });
    }
    componentDidMount() {
        let currentTimeView = new CurrentTimeView();
        currentTimeView.render(document.getElementById("current-time"));
    }
    render() {
        return <Tabs className="page-header">
            <TabList>
                <Tab>Button</Tab>
                <Tab>Todo List</Tab>
                <Tab>Current Time</Tab>
            </TabList>

            <TabPanel>
                <h2>
                    <div>{this.props.innerHtml}</div>
                    <button onClick={this.press}>{this.state.buttonText}</button>
                </h2>
            </TabPanel>
            <TabPanel>
                <h2>
                    <div id="todo-item"></div>
                </h2>
            </TabPanel>
            <TabPanel>
                <h2>
                    <div id="current-time"></div>
                </h2>
            </TabPanel>
        </Tabs>;
    }
}