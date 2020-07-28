import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    bb.generate({
      bindto: "#spread",
      data: {
        x: 'x',
        columns: [
            ["x", "2020-7-20", "2020-7-21", "2020-7-22", "2020-7-23", "2020-7-24", "2020-7-25", "2020-7-26", "2020-7-27"],
            ["Total", 2,6,3,8,2.5,4,6,7,8,5,4,5,7],
            ["FEC", 1,5,3,1,1.5,2,0,6,4,3,1,4,5],
            ["SDC", 1,1,0,7,1,2,6,1,4,2,3,1,2],
            ["Average", 2,4,3.5,6,5,5,6,7,4,3,7,6,6.7]
        ],
        types: {
          "FEC": "bar",
          "SDC": "bar",
          "Total": "bar",
          "Average": "line"
        },
        groups: [["FEC", "SDC"]],
        colors: {
          "Total": "F5D4B3",
          "FEC": "B3E5F5",
          "SDC": "5996A8"
        }
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: function(x) {
            return x.getDay()
           }
          }
        },
        y: {
          label: 'Hours'
        }
      }
  });
  }

  render() {
    return(
      <div id="main">
        <div id="spread"></div>
      </div>
    )
  }
}

export default Main