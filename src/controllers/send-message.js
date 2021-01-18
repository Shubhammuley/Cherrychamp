module.exports = function makeSendMessageAction({
    sendMessage,
}) {
  return async function sendMessageAction(httpRequest) {
    const message = sendMessage({ ...httpRequest.body });
    return {
      statusCode: 200,
      body: message,
    };
  };
};
