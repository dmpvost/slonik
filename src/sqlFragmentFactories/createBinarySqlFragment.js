// @flow

import {
  InvalidInputError,
} from '../errors';
import type {
  BinarySqlTokenType,
  SqlFragmentType,
} from '../types';

export default (token: BinarySqlTokenType, greatestParameterPosition: number): SqlFragmentType => {
  if (!Buffer.isBuffer(token.data)) {
    throw new InvalidInputError('Binary value must be a buffer.');
  }

  return {
    sql: '$' + (greatestParameterPosition + 1),
    values: [
      // $FlowFixMe
      token.data,
    ],
  };
};
