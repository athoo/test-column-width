import React from 'react';
import {Grid} from 'react-virtualized';
import faker from "faker";

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list: [
                ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
                ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
                ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
                ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ]
                // And so on...
            ],
            widths: [],
            counter: 200
        };
        this.cellRenderer = this.cellRenderer.bind(this);
        this.reSize = this.reSize.bind(this);
        this.columnWidthHelper = this.columnWidthHelper.bind(this);
    }

    reSize(e){
        const counter = this.state.counter;
        console.log(this.state.counter);
        this.setState({counter: counter+100})
    }



    columnWidthHelper(params){
        // console.log();
        console.log("this is column width"+params.index+"\t"+this.state.counter);
        return params.index*this.state.counter;
    }

    cellRenderer({columnIndex,isScrolling, isVisible, key, parent, rowIndex, style}) {
        if(rowIndex===0){
            return (
                <React.Fragment key={key}>
                    <div
                        // key={key}
                        style={style}
                        className="table-header"
                    >
                        {this.state.list[rowIndex][columnIndex]}
                        <span className="drag-icon">{key}</span>
                    </div>
                </React.Fragment>

            )
        }else {
            return (
                <div
                    key={key}
                    style={style}
                    className="table-content"
                >
                    {this.state.list[rowIndex][columnIndex]}
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                <Grid
                    cellRenderer={this.cellRenderer}
                    columnCount={this.state.list[0].length}
                    columnWidth={this.columnWidthHelper}
                    height={300}
                    rowCount={this.state.list.length}
                    rowHeight={30}
                    width={1000}
                    estimatedColumnSize={1000}
                />
                <button onClick={this.reSize}>change Counter</button>
            </React.Fragment>

                )
    }
}

export default Demo;
