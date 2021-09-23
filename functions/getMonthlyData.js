const { getAstraRestClient, getRestPath } = require("./utils/astraClient");

exports.handler = async function (event, context) {
  const account = event.queryStringParameters.account ?? "";
  const astraClient = await getAstraRestClient();
  const path = getRestPath("/charged_usage");
  try {
    const { data, status } = await astraClient.get(`${path}/${account}`);
    return {
      statusCode: status,
      body: JSON.stringify(data),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
