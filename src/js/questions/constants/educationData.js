
export const EDU_PUBLIC_PRIVATE_DATA = [
  {
    id: 'edu_public',
    text: 'Public'
  },
  {
    id: 'edu_Private',
    text: 'Private'
  }
];

export const EDUCATION_LEVELS = {
  NONE: 'none',
  HS_OR_EQ: 'hs_or_eq',
  SOME_COL_NO_DEG: 'some_col_no_deg',
  ASSC_DEG: 'assc_deg',
  BACH_DEG: 'bach_deg',
  POST_SEC_NON_DEG: 'post_sec_non_deg',
  MAST_DEG: 'mast_deg',
  DOC_OR_PROF_DEG: 'doc_or_prof_deg'
};

// All numbers in here are guesses
// Real figures should come from https://collegescorecard.ed.gov/data/
export default [
  {
    id: EDUCATION_LEVELS.NONE,
    text: 'No formal educational credential',
    years: 0
  },
  {
    id: EDUCATION_LEVELS.HS_OR_EQ,
    text: 'High School or Equivalent',
    years: 0
  },
  {
    id: EDUCATION_LEVELS.SOME_COL_NO_DEG,
    text: 'Some college, no degree',
    years: 1,
    annualPublicCost: 8826,
    annualPrivateCost: 17015
  },
  {
    id: EDUCATION_LEVELS.ASSC_DEG,
    text: "Associate's degree",
    years: 2,
    annualPublicCost: 7746,
    annualPrivateCost: 15039
  },
  {
    id: EDUCATION_LEVELS.BACH_DEG,
    text: "Bachelor's Degree",
    years: 4,
    annualPublicCost: 8000,
    annualPrivateCost: 15039
  },
  {
    id: EDUCATION_LEVELS.POST_SEC_NON_DEG,
    text: 'Postsecondary nondegree award',
    years: 6,
    annualPublicCost: [15000, 15000, 15000, 15000, 20000],
    annualPrivateCost: [15000, 15000, 15000, 15000, 20000]
  },
  {
    id: EDUCATION_LEVELS.MAST_DEG,
    text: 'Masters Degree',
    years: 6,
    annualPublicCost: [15000, 15000, 15000, 15000, 20000],
    annualPrivateCost: [15000, 15000, 15000, 15000, 20000]
  },
  {
    id: EDUCATION_LEVELS.DOC_OR_PROF_DEG,
    text: 'Doctoral or professional degree',
    years: 8,
    annualPublicCost: [15000, 15000, 15000, 15000, 20000],
    annualPrivateCost: [15000, 15000, 15000, 15000, 20000]
  }
];
