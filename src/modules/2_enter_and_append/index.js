import React, { Component } from 'react'
import * as d3 from 'd3'

class EnterAndAppend extends Component {
  componentDidMount() {
    const rectWidth = 50
    const height = 200
    var data = [100, 250, 175, 200, 120]
    
    const svg = d3.select('#svg-2')
    svg.selectAll('.rect-2')
      .data(data)
      .enter().append('rect')
      .attr('class', 'rect-2')
      .attr('x', (d, i) => i * rectWidth)
      .attr('y', d => height - d)
      .attr('width', rectWidth)
      .attr('height', d => d)
      .attr('fill', 'blue')
      .attr('stroke', '#fff')
  }
  
  render() {
    return <svg id='svg-2' />
  }
}

export default EnterAndAppend
