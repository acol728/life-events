
/* eslint no-console: "off" */
import careerPlansPage from './careerPlansPage';
import initialPage from './initialPage';
import leisurePage from './leisurePage';
import lifestylePage from './lifestylePage';

export default {
  ...initialPage,
  ...careerPlansPage,
  ...leisurePage,
  ...lifestylePage
};
