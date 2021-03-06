import { ErrorHandler } from '..';

/**
 * Belong To Schema
 * @category Validators
 * @param {string[]} props Properties to check if exists on Schema
 * @param {Schema} schema
 * @throws {CustomError} When a property is not found on Schema
 * @returns {boolean}
 */
const BelongToSchema = (props, schema) => {
  let errorFound = '';

  props.map(propToCheck => {
    const notHasPropertyOnSchema = !Object.prototype.hasOwnProperty.call(schema, propToCheck);
    if (notHasPropertyOnSchema) {
      errorFound = `${propToCheck} not found on Schema.`;
    }
    return errorFound;
  });

  if (errorFound !== '') {
    ErrorHandler.throw(errorFound);
  }

  return errorFound === '';
};

export default BelongToSchema;
