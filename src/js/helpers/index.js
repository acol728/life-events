/* eslint no-console: "off" */
import helpersModule from 'handlebars-helpers'
import pages from '../questions/pages'
import state from '../globals'

const getPage = i =>
	// return true
	pages[i]

const getPages = () =>
	// return true
	pages

const getState = () => state

const debug = (optionalValue) => {
	console.log('Current Context');
	console.log('====================');
	console.log(this);

	if (optionalValue) {
		console.log('Value');
		console.log('====================');
		console.log(optionalValue);
	}
}

const register = (Handlebars) => {
	const externalHelpers = helpersModule()

	const helpers = {
		...externalHelpers,
		getState,
		getPage,
		getPages,
		debug
	}

	if (Handlebars && typeof Handlebars.registerHelper === 'function') {
		helpers.keys.map((prop) => {
			Handlebars.registerHelper(prop, helpers[prop])
			return prop
		})
		// for (const prop in helpers) {
		// 	if (helpers.hasOwnProperty(prop)) { Handlebars.registerHelper(prop, helpers[prop]); }
		// }
	}

	return helpers;
}

const helpers = register(null)

export {
	register,
	helpers
}
