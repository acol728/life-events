import $ from 'jquery'
import '../styles/entry.scss'
import globals from './globals'
import { navigateForward, navigateBackward } from './navigation'
import createChart from './chart'



$(document).ready(() => {

    createChart()

    $('#navigate-forward').click(navigateForward)

    $('#navigate-back').click(navigateBackward)
})

module.exports = {
    ...globals,
    createChart
}
