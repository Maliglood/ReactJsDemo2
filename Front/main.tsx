import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppView } from "./Views/app";
import {Main as TodoItem} from "./Views/todoItem";

ReactDOM.render(
    <AppView innerHtml="<p>Version 1.0</p>" buttonText="Click here" />,
    document.getElementById("main")
);

ReactDOM.render(
    React.createElement(TodoItem),
    document.getElementById('todo-item')
);