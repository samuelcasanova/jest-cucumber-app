import { loadFeatures, autoBindSteps } from 'jest-cucumber'

import { calculatorSteps } from './calculator.steps'

const features = loadFeatures('test/calculator.feature')
autoBindSteps(features, [calculatorSteps])
