export const INDV = 'INDV';
export const JOINT = 'JOINT';

const TAX_BRACKETS = {
  STATE: {
    WI: {
      [INDV]: [
        {
          maxEarnings: 11090,
          percent: 0.04
        },
        {
          maxEarnings: 22190,
          percent: 0.0584
        },
        {
          maxEarnings: 244270,
          percent: 0.0627
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0765
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 14790,
          percent: 0.04
        },
        {
          maxEarnings: 29580,
          percent: 0.0584
        },
        {
          maxEarnings: 325700,
          percent: 0.0627
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0765
        }]
    }
  },
  FEDERAL: {
    [INDV]: [
      {
        maxEarnings: 9525,
        percent: 0.10
      },
      {
        maxEarnings: 38700,
        percent: 0.12
      },
      {
        maxEarnings: 82500,
        percent: 0.22
      },
      {
        maxEarnings: 157500,
        percent: 0.24
      },
      {
        maxEarnings: 200000,
        percent: 0.32
      },
      {
        maxEarnings: 500000,
        percent: 0.35
      },
      {
        maxEarnings: 999999999,
        percent: 0.37
      }
    ],
    [JOINT]: [{
      maxEarnings: 19050,
      percent: 0.10
    },
    {
      maxEarnings: 77400,
      percent: 0.12
    },
    {
      maxEarnings: 165000,
      percent: 0.22
    },
    {
      maxEarnings: 315000,
      percent: 0.24
    },
    {
      maxEarnings: 400000,
      percent: 0.32
    },
    {
      maxEarnings: 600000,
      percent: 0.35
    },
    {
      maxEarnings: 999999999,
      percent: 0.37
    }]
  }
};

export default {
  INDV,
  JOINT,
  TAX_BRACKETS
};
