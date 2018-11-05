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
            widths: []
        };
        this.cellRenderer = this.cellRenderer.bind(this);
    }

    reSize(){

    }

    columnWidthHelper(item){

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
            <Grid
                cellRenderer={this.cellRenderer}
                columnCount={this.state.list[0].length}
                columnWidth={100}
                height={300}
                rowCount={this.state.list.length}
                rowHeight={30}
                width={300}
            />
                )
    }
}

export default Demo;
