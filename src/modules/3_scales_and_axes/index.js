import React, { Component } from 'react'
import * as d3 from 'd3'

/*
 * Remember that scales do not just have to values to x or y values.
 * You could create a scale to map inputs to any desired output,
 * e.g., opacity, radius - whatever you want to control for the visualization 
 */

/*
 * When creating a linear scale, your domain should be the min and max
 * Of your data. 
 * You can use d3.min() and d3.max() to find those values.
 * e.g., d3.min(data, d => d.age)
 * d3.extent() is a shorthand to do d3.min() and d3.max(), returning you
 * [min, max], which is the right shape to pass into .domain() or .range()
 * d3.extent(data, d => d.age)
 */

/*
 * So an example y-scale
 * const yScale = d3.scaleLinear()
 *   .domain(d3.extent(data, d => d.age))
 *   .range([height, 0])
 */

const data = [
  { month: 'January', avgTemp: 34.5 },
  { month: 'February', avgTemp: 39.9 },
  { month: 'March', avgTemp: 51.4 },
  { month: 'April', avgTemp: 62.9 },
  { month: 'May', avgTemp: 73.5 },
  { month: 'June', avgTemp: 82.1 },
  { month: 'July', avgTemp: 85.6 },
  { month: 'August', avgTemp: 83.7 },
  { month: 'September', avgTemp: 77.4 },
  { month: 'October', avgTemp: 65.6 },
  { month: 'November', avgTemp: 51.6 },
  { month: 'December', avgTemp: 39.2 }
]

const chartWidth = 500
const chartHeight = 500
const barWidth = chartWidth / data.length - 3

const margin = {
  top: 0,
  bottom: 0,
  left: 40,
  right: 0
}

const xScale = d3.scaleBand()
  .domain(data.map(data => data.month))
  .range([margin.left, chartWidth - margin.right])

const heightScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.avgTemp))
  // Remember, y=0 is the top of the SVG!
  .range([0, chartHeight])

class ScalesAndAxes extends Component {
  componentDidMount() {
    const svg = d3.select('#svg-3')
      .attr('width', chartWidth + margin.left + margin.right)
      .attr('height', chartHeight + margin.top + margin.bottom)
    
    svg.selectAll('.rect-3')
      .data(data).enter()
      .append('rect')
        .attr('x', d => xScale(d.month))
        .attr('height', d => heightScale(d.avgTemp))
        .attr('y', d => chartHeight - margin.bottom - heightScale(d.avgTemp))
        .attr('width', barWidth)
        .attr('fill', 'blue')
        .attr('class', 'rect-3')
        .attr('stroke', '#ffffff')
  }
  
  render() {
    return <svg id='svg-3' />
  }
}

export default ScalesAndAxes
