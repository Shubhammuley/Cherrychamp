module.exports = function makeCleanPhoneId({
  TeleSignSDK,
}) {
  async function cleanPhoneId({
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
    let result = {};
    await client.phoneid.phoneID((error, responseBody) => {
        if (error === null) {
            console.info(`PhoneID response for phone number: ${phoneNumber} ` +
            `=> code: ${responseBody['status']['code']}, ` +
            `description: ${responseBody['status']['description']} ${typeof responseBody}`);

        if (responseBody['status']['code'] === 200) {
            const cc = responseBody['numbering']['cleansing']['call']['country_code'];
            const pn = responseBody['numbering']['cleansing']['call']['phone_number'];
            console.info("Cleansed phone number has country code $cc and phone number is $pn.")
        }
        result = { ...responseBody };
        console.info("------------------------------------>", responseBody, result)
          return responseBody;
        } else {
            result = error;
            console.info("Unable to send message. " + error);
        }
    }, phoneNumber);
    console.info('-------------------------', result)
    return {result};
  }
  return cleanPhoneId;
};
