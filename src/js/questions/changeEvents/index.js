
/* eslint no-console: "off" */
import careerPlansPage from './careerPlansPage';
import initialPage from './initialPage';
import educationPage from './educationPage';
import leisurePage from './leisurePage';
import lifestylePage from './lifestylePage';

export default {
  ...initialPage,
  ...educationPage,
  ...careerPlansPage,
  ...leisurePage,
  ...lifestylePage
};
