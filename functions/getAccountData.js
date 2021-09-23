const { getCollection } = require("./utils/astraClient");

exports.handler = async function (event, context) {
  const account = event.queryStringParameters.account;
  const accountCollection = await getCollection("sag_account_info");
  try {
    const result = await accountCollection.get(account);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
