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
const chartHeight = 300
const barWidth = chartWidth / data.length - 3

const margin = {
  top: 0,
  bottom: 20,
  left: 40,
  right: 0
}

const xScale = d3.scaleBand()
  .domain(data.map(data => data.month))
  .range([margin.left, chartWidth - margin.right])

const yScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.avgTemp))
  // If we wanted yAxis to start at 0
  // .domain([0, d3.max(data, d => d.avgTemp)])
  // Remember, y=0 is the top of the SVG!
  .range([chartHeight - margin.bottom, 0 + margin.top])

class ScalesAndAxes extends Component {
  componentDidMount() {
    const svg = d3.select('#svg-3')
      .attr('width', chartWidth + margin.left + margin.right)
      .attr('height', chartHeight + margin.top + margin.bottom)
    
    svg.selectAll('.rect-3')
      .data(data).enter()
      .append('rect')
        .attr('x', d => xScale(d.month))
        .attr('height', d => chartHeight - margin.bottom - yScale(d.avgTemp))
        .attr('y', d => yScale(d.avgTemp))
        .attr('width', barWidth)
        .attr('fill', 'blue')
        .attr('class', 'rect-3')
        .attr('stroke', '#ffffff')
    
    const yAxis = d3.axisLeft()
      .scale(yScale)

    const xAxis = d3.axisBottom()
      .scale(xScale)

    // Place the axis inside a group element so that it can
    // be easily transformed
    svg.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      // selection.call(yAxis) is the same as yAxis(selection)
      // An axis is created within the selection
      // i.e., we are drawing all SVG necessary to create axis inside
      // the <g> we just appended (and thus selected)
      .call(yAxis)

    svg.append('g')
      .attr('transform', `translate(0, ${chartHeight - margin.bottom})`)
      .call(xAxis)
  }
  
  render() {
    return <svg id='svg-3' />
  }
}

export default ScalesAndAxes
