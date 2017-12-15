/// <reference path="../../typings/react/react.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactTable, {CellRenderer, Column, ColumnAccessor} from 'react-table'

class book implements Column<any>{
    width?: number;
    Header?: string;
    Cell?: CellRenderer<any>;
    id?: string;
    minWidth?: number;
    className?: string;
    accessor?: ColumnAccessor<any> | keyof any;
    sortMethod?: (a: any, b: any) => number;


    constructor(Header: string, accessor: ColumnAccessor<any> | keyof any, id?: string, Cell?: CellRenderer<string>){
        this.Header = Header;
        this.accessor = accessor;
        if (id != null || id != undefined) this.id = id;
        if (Cell != null || Cell != undefined) this.Cell = Cell;
    }
}

let data = [
    {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23
        }
    }, {
        name: '222',
        age: 27,
        friend: {
            name: '222',
            age: 24
        }
    }
];

let columns: Array<book> = [
    new book('Name', a => 'name'),
    new book('Age', a => 'age', 'customcell', props => <span className='number'>{props.value}</span>),
    new book('Friend Name', d => d.friend.name, 'friendName'),
    new book('Friend Age', a => 'friend.age')
];

export class BookListView {
    render(el: HTMLElement) {
        ReactDOM.render(
            <ReactTable data={data} columns={columns}/>,
            el
        );
    }
}