// Type definitions for react-modal v1.3.0
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../react/react.d.ts"/>
export declare module "react-modal" {
    export interface Style {
        color: string;
    }

    export interface Subtitle {
        style: Style;
    }

    export interface ReactModal {
        isOpen: boolean;
        style?: {
            content: {
                [key: string]: any;
            },
            overlay: {
                [key: string]: any;
            }
        },
        appElement?: HTMLElement | {},
        onAfterOpen?: Function,
        onRequestClose?: Function,
        closeTimeoutMS?: number,
        ariaHideApp?: boolean,
        shouldCloseOnOverlayClick?: boolean
    }
    let ReactModal: __React.ClassicComponentClass<ReactModal>;
    export default ReactModal;
}