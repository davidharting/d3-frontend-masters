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

class ScalesAndAxes extends Component {
  componentDidMount() {
  }
  
  render() {
    return <svg id='svg-3' />
  }
}

export default ScalesAndAxes
