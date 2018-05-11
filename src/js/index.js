import $ from 'jquery'
import { anotherFunction } from './another'

const test = (string) => {
    console.log("I'M RUNNING:", $('#data').click(() => {
        alert("HELLO")
    }))

    return ": I'm in " + string
}

export {
    test,
    anotherFunction
}

// var jQuery = require('jQuery');
// jQuery(function ($) {
//     $('body').html('<h1>Hello jQuery</h1>');
// });
