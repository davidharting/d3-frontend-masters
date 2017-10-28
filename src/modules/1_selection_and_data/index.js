import React, { Component } from 'react'
import * as d3 from 'd3'

class SelectionAndData extends Component {
  componentDidMount() {
    const rectWidth = 50
    const height = 200
    var data = [100, 250, 175, 200, 120]
    d3.selectAll('.rect-1')
      .data(data)
      .attr('x', (d, i) => i * rectWidth)
      .attr('y', d => height - d)
      .attr('width', rectWidth)
      .attr('height', d => d)
      .attr('fill', 'blue')
      .attr('stroke', '#fff')
  }

  render() {
    return (
      <svg>
        <rect class='rect-1' />
        <rect class='rect-1' />
        <rect class='rect-1' />
        <rect class='rect-1' />
        <rect class='rect-1' />
      </svg>
    )
  }
}

export default SelectionAndData;
