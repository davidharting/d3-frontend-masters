import React, { Component } from 'react'
import * as d3 from 'd3'

class EnterAndAppend extends Component {
  componentDidMount() {
    const rectWidth = 35
    const height = 200
    var data = [100, 250, 55, 200, 120, 60, 175]
    
    const svg = d3.select('#svg-2')
    const rects = svg.selectAll('.rect-2')
      .data(data)
      .enter().append('rect')
      .attr('class', 'rect-2')
      .attr('x', (d, i) => i * rectWidth)
      .attr('y', d => height - d)
      .attr('width', rectWidth)
      .attr('height', d => d)
      .attr('fill', function determineFill(d) {
        if (d <= 60) {
          return 'lightblue'
        }
        if (d <= 150) {
          return 'blue'
        }
        return 'purple'
      })
      .attr('stroke', '#fff')
  }
  
  render() {
    return <svg id='svg-2' />
  }
}

export default EnterAndAppend
