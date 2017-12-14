import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppView } from "./Views/app";

ReactDOM.render(
    <AppView innerHtml="<p>Version 1.0</p>" buttonText="Click here" />,
    document.getElementById("main")
);