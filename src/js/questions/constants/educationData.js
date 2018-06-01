export default [
	{
		id: 'none',
		text: 'No formal educational credential',
		costPerYear: 0,
		years: 0
	},
	{
		id: 'hs_or_eq',
		text: 'High School or Equivalent',
		costPerYear: 0,
		years: 0
	},
	{
		id: 'some_col_no_deg',
		text: 'Some college, no degree',
		costPerYear: 15000,
		years: 1
	},
	{
		id: 'assc_deg',
		text: "Associate's degree",
		costPerYear: 10000,
		years: 2
	},
	{
		id: 'bach_deg',
		text: "Bachelor's Degree",
		costPerYear: 15000,
		years: 4
	},
	{
		id: 'post_sec_non_deg',
		text: 'Postsecondary nondegree award',
		costPerYear: [15000, 15000, 15000, 15000, 20000],
		years: 6
	},
	{
		id: 'mast_deg',
		text: 'Masters Degree',
		costPerYear: [15000, 15000, 15000, 15000, 20000],
		years: 6
	},
	{
		id: 'doc_or_prof_deg',
		text: 'Doctoral or professional degree',
		costPerYear: [15000, 15000, 15000, 15000, 20000],
		years: 8
	}
]
