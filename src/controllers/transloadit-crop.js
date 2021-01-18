module.exports = function makeTransloaditCropAction({
    transloaditCrop,
}) {
  return async function transloaditCropAction(httpRequest) {
    const message = await transloaditCrop({
      files: httpRequest.files,
    });
    return {
      statusCode: 200,
      body: message,
    };
  };
};
