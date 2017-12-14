import * as React from "react";

export interface BookList { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class BookListView extends React.Component<BookList, {}> {
    render() {
        return <div className="page-header">
                   <div></div>
                   <div id="books-list"></div>
               </div>;
    }
}