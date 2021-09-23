const { getAstraRestClient, getRestPath } = require("./utils/astraClient");

exports.handler = async function (event, context) {
  const username = event.queryStringParameters.username;
  const astraClient = await getAstraRestClient();
  const path = getRestPath("/login");
  try {
    const { data, status } = await astraClient.get(`${path}/${username}`);
    return {
      statusCode: status,
      body: JSON.stringify(data[0].account),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(false),
    };
  }
};
