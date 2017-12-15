import * as React from "react";
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
        return <div className="page-header">
            <div>{this.props.innerHtml}</div>
            <button onClick={this.press}>{this.state.buttonText}</button>
            <div id="current-time"></div>
            <div id="books-list"></div>
            <div id="todo-item"></div>
        </div>;
    }
}