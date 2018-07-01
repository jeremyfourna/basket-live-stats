import {
  curry,
  ifElse,
  isNil,
  prop
} from 'ramda';

function methodHookHelperWithoutCurry(functionInCaseOfSuccess, resultFromMethod) {
  return ifElse(
    resultFromMethod => isNil(prop('error', resultFromMethod)),
    functionInCaseOfSuccess,
    () => { return; }
  )(resultFromMethod);
}

export const methodHookHelper = curry(methodHookHelperWithoutCurry);
