import './parts/hero';
import './parts/vector-animation';
import { scrolling } from './parts/scrolling';

import { checkSurveyArea } from './parts/forms/survey-area';
import { checkAllergy } from './parts/forms/allergy';
import { checkEpilation } from './parts/forms/epilation';
import { destinationForm } from './parts/forms/destination';
import { reservationForm } from './parts/forms/reservation';
import './parts/submit';

import { nextStep } from './parts/button-next';

scrolling();

checkSurveyArea();
checkAllergy();
checkEpilation();
destinationForm();
reservationForm();

nextStep();
