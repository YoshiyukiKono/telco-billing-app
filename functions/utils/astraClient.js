const astraDocuments = require("@astrajs/collections");
const astraRest = require("@astrajs/rest");

let astraDocumentClient = null;
let astraRestClient = null;

const clientOptions = {
  astraDatabaseId: process.env.ASTRA_DB_ID,
  astraDatabaseRegion: process.env.ASTRA_DB_REGION,
  applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
};

const getAstraDocumentClient = async () => {
  if (astraDocumentClient === null) {
    astraDocumentClient = await astraDocuments.createClient(clientOptions);
  }
  return astraDocumentClient;
};

const getAstraRestClient = async () => {
  if (astraRestClient === null) {
    astraRestClient = await astraRest.createClient(clientOptions);
  }
  return astraRestClient;
};

const getCollection = async (collection) => {
  const documentClient = await getAstraDocumentClient();
  return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);
};

const getRestPath = (path) => {
  return `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}${path}`;
};

module.exports = { getAstraRestClient, getRestPath, getCollection };
