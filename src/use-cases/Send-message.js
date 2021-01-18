module.exports = function makeSendMessage({
  TeleSignSDK,
}) {

  async function messageCallback(error, responseBody) {
      if (error === null) {
        console.info(`Messaging response for messaging phone number` +
        ` => code: ${responseBody['status']['code']}` +
        `, description: ${responseBody['status']['description']}`);
          return responseBody;
      } else {
          console.error("Unable to send message. " + error);
      }
  }
    
  async function sendMessage({
    message,
    phoneNumber,
  }) {
    const customerId = "838C1469-64D3-408F-9A1C-F9A7DAB9B016";
    const apiKey = "jsASJEyHN0VTIRuZr9GZN+keYz/zUte8HBnh+6PTPxvcJR64Mcu3/L1f7aHaO+gl6MDvpwrhwLjQT+b3hdG36w==";

    const rest_endpoint = "https://rest-api.telesign.com";
    const timeout = 10*1000;
    const client = new TeleSignSDK(
      customerId,
      apiKey,
      rest_endpoint,
      timeout
    );
    const messageType = "ARN";
    const messageSent = await client.sms.message(messageCallback, phoneNumber, message, messageType);
    return {message, messageSent};
  }
  return sendMessage;
};
