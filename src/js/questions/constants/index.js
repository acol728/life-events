import IDs from './pages'
import OCCUPATIONAL_DATA from './occupationData'
import EDUCATIONAL_DATA from './educationData'

const DEFAULT_AGE = 18
const DEFAULT_DEATH_AGE = 80
const DEFAULT_COLA_ADJ = 0.02

const TAX_BRACKETS = [
	{
		minEarnings: 0,
		percent: 0.18
	}
]

export default {
	IDs,
	OCCUPATIONAL_DATA,
	EDUCATIONAL_DATA,
	DEFAULT_AGE,
	DEFAULT_DEATH_AGE,
	DEFAULT_COLA_ADJ,
	TAX_BRACKETS
}
