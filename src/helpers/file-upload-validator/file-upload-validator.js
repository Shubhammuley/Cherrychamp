module.exports = function makeFileValidator({
  ValidationError,
}) {
  /**
   *
   * @param files
   * @param maxFiles
   * @param maxSize
   * @param supportedTypes
   * @returns {boolean}
   */
  function fileValidator({
    files,
    maxFiles = 1,
    maxSize = 2,
    supportedTypes = ['png', 'svg'],
  }) {
    if (!files.length) {
      throw new ValidationError('No files provided.', 'ValidationError');
    }
    if (files.length > maxFiles) {
      throw new ValidationError(`No more than ${maxFiles} file allowed.`, 'ValidationError');
    }
    let fileGreaterThanMaxSize = false;
    let unsupportedFileType = false;
    files.forEach(({ mimetype, fileSize }) => {
      if (fileSize > maxSize) {
        fileGreaterThanMaxSize = true;
      }
      unsupportedFileType = !supportedTypes.some((item) => mimetype.includes(item));
    });
    if (fileGreaterThanMaxSize) {
      throw new ValidationError(`Files less than ${maxSize}MB are in size allowed.`, 'ValidationError');
    }
    if (unsupportedFileType) {
      throw new ValidationError(`Only ${supportedTypes.join(',')} file types are allowed.`, 'ValidationError');
    }
    return true;
  }
  return fileValidator;
};
