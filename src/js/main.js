import './parts/hero';

import { nextStep } from './parts/button-next';

import { checkSurveyArea } from './parts/forms/survey-area';
import { checkAllergy } from './parts/forms/allergy';
import { checkEpilation } from './parts/forms/epilation';
import './parts/forms/destination';

import './parts/vector-animation';
import { scrolling } from './parts/scrolling';

nextStep();

checkSurveyArea();
checkAllergy();
checkEpilation();

scrolling();
