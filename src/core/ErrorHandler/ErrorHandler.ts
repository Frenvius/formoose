import CustomError from '../CustomError';

/**
 * @category Utils
 */
class ErrorHandler {
  /**
   * Throws a Custom Error to be used on fields and validation process
   * @param {string} message
   * @param {string} field
   * @param {string} translatedMessageId
   * @param {Object} translatedMessageLocals
   * @throws {CustomError}
   */
  static throw(message: string, field?: string, translatedMessageId?: string, translatedMessageLocals = {}) {
    throw new CustomError(message, field, translatedMessageId, translatedMessageLocals);
  }
}

export default ErrorHandler;
