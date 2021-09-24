const { getAstraRestClient, getRestPath } = require("./utils/astraClient");

exports.handler = async function (event, context) {
  let ratingGroup = event.queryStringParameters.ratingGroup;
  const astraClient = await getAstraRestClient();
  const path = getRestPath("/ratinggroup");
  try {
    const { data, status } = await astraClient.get(`${path}/${ratingGroup}`);
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
