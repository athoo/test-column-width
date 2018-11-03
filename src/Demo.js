import React from "react";
import { Column, Table, Grid } from "react-virtualized";
import Draggable from "react-draggable";
import faker from "faker";

const TOTAL_WIDTH = 500;
const list = new Array(100).fill(true).map(() => ([
    faker.name.findName(),
    faker.name.jobTitle(),
    faker.address.city()
]));

class GridDemo extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {widths: {
                name: 0.33,
                location: 0.33,
                description: 0.33
            }}
    };


    cellRender ({columnIndex, key, rowIndex, style}) {
        return (
            <React.Fragment key={key}>
            <div
                key={key}
                style={style}
            >
                {list[rowIndex][columnIndex]}
            </div>
                <Draggable
                    axis="x"
                    defaultClassName="DragHandle"
                    defaultClassNameDragging="DragHandleActive"
                    onDrag={(event, { deltaX }) =>
                        this.resizeRow({
                            key,
                            deltaX
                        })
                    }
                    position={{ x: 0 }}
                    zIndex={999}
                >
                    <span>⋮</span>
                </Draggable>
            </React.Fragment>
        )
    }

    resizeRow = ({ dataKey, deltaX }) =>
        this.setState(prevState => {
            const prevWidths = prevState.widths;
            const percentDelta = deltaX / TOTAL_WIDTH;

            // This is me being lazy :)
            const nextDataKey = dataKey === "name" ? "location" : "description";

            return {
                widths: {
                    ...prevWidths,
                    [dataKey]: prevWidths[dataKey] + percentDelta,
                    [nextDataKey]: prevWidths[nextDataKey] - percentDelta
                }
            };
        });

    render(){
        return(
            <Grid
                cellRenderer={this.cellRender}
                columnCount={list[0].length}
                columnWidth={100}
                height={300}
                rowCount={list.length}
                rowHeight={30}
                width={300}
            >
            </Grid>
        )
    }

}

class Demo extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {widths: {
                name: 0.33,
                location: 0.33,
                description: 0.33
            }}
    };



    render() {
        const { list } = this.props;//the list is from the external reference.
        // const { widths } = this.state;
        const widths = this.state.widths;

        return (
            <Table
                width={TOTAL_WIDTH}
                height={300}
                headerHeight={20}
                rowHeight={30}
                rowCount={list.length}
                rowGetter={({ index }) => list[index]}
            >
                <Column
                    headerRenderer={this.headerRenderer}
                    dataKey="name"
                    label="Name"
                    width={widths.name * TOTAL_WIDTH}
                />
                <Column
                    headerRenderer={this.headerRenderer}
                    dataKey="location"
                    label="Location"
                    width={widths.location * TOTAL_WIDTH}
                />
                <Column
                    dataKey="description"
                    label="Description"
                    width={widths.description * TOTAL_WIDTH}
                />
            </Table>
        );
    }

    headerRenderer = ({
                          columnData,
                          dataKey,
                          disableSort,
                          label,
                          sortBy,
                          sortDirection
                      }) => {
        return (
            <React.Fragment key={dataKey}>
                <div className="ReactVirtualized__Table__headerTruncatedText">
                    {label}
                </div>
                <Draggable
                    axis="x"
                    defaultClassName="DragHandle"
                    defaultClassNameDragging="DragHandleActive"
                    onDrag={(event, { deltaX }) =>
                        this.resizeRow({
                            dataKey,
                            deltaX
                        })
                    }
                    position={{ x: 0 }}
                    zIndex={999}
                >
                    <span className="DragHandleIcon">⋮</span>
                </Draggable>
            </React.Fragment>
        );
    };

    resizeRow = ({ dataKey, deltaX }) =>
        this.setState(prevState => {
            const prevWidths = prevState.widths;
            const percentDelta = deltaX / TOTAL_WIDTH;

            // This is me being lazy :)
            const nextDataKey = dataKey === "name" ? "location" : "description";

            return {
                widths: {
                    ...prevWidths,
                    [dataKey]: prevWidths[dataKey] + percentDelta,
                    [nextDataKey]: prevWidths[nextDataKey] - percentDelta
                }
            };
        });
}


export {
    GridDemo,
    Demo
}