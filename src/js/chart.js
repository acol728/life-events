// import $ from 'jquery'
import d3 from 'd3'
// import d3Axis from 'd3-axis'

const createChart = () => {
	const scale = d3.scaleLinear()
		.domain([10, 130])
		.range([0, 960])
	const axis = d3.axisLeft(scale)
	d3.select('.chart')
		.append('svg')
		.attr('width', 1440)
		.attr('height', 30)
		.append('g')
		.attr('transform', 'translate(0,30)')
		.call(axis);
}

export default createChart
