import React, { Component } from 'react';
import { Grid } from 'react-virtualized';
import ReactDOM from 'react-dom';
import 'react-virtualized/styles.css';

const list = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ]
    // And so on...
];
// const style = {
//     backgroundColor:"red"
// }

class App extends Component {
    constructor(props){
        super(props);
    }

    cellRenderer ({ columnIndex, key, rowIndex, style }) {
        return (
            <div
                key={key}
                style={style}
            >
                {list[rowIndex][columnIndex]}
            </div>
        )
    }

  render() {
    return (
        <Grid
            cellRenderer={this.cellRenderer}
            columnCount={list[0].length}
            columnWidth={100}
            height={300}
            rowCount={list.length}
            rowHeight={30}
            width={300}
        />
            // ,
        // document.getElementById('example')
    );
  }
}

export default App;
//
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import { Grid } from 'react-virtualized';
//
//
//
// class App extends Component {
//     constructor
//
//
// export default App;
//
// // Grid data as an array of arrays
// const list = [
//     ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ]
//     // And so on...
// ];
//
// function cellRenderer ({ columnIndex, key, rowIndex, style }) {
//     return (
//         <div
//             key={key}
//             style={style}
//         >
//             {list[rowIndex][columnIndex]}
//         </div>
//     )
// }
//
// // Render your grid
// ReactDOM.render(
//     <Grid
//         cellRenderer={cellRenderer}
//         columnCount={list[0].length}
//         columnWidth={100}
//         height={300}
//         rowCount={list.length}
//         rowHeight={30}
//         width={300}
//     />,
//     document.getElementById('example')
// );
//
// }

