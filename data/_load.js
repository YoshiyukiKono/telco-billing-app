require("dotenv").config();
const {
  getCollection,
  getAstraRestClient,
} = require("../functions/utils/astraClient");

// load collection data
const accountInfo = require("./accountinfo.json");
const collections = [accountInfo];

// load C* data
const chargedUsage = require("./charged_usage.json");
const dailyDataUsage = require("./daily_data_usage.json");
const ratingGroup = require("./ratinggroup.json");
const login = require("./login.json");
const tables = [chargedUsage, dailyDataUsage, ratingGroup, login];

const schemasBasePath = `/api/rest/v2/schemas/keyspaces/${process.env.ASTRA_DB_KEYSPACE}`;
const tablesBasePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}`;

if (!process.env.ASTRA_DB_APPLICATION_TOKEN) {
  console.error(
    `A .env file with your ASTRA_DB_APPLICATION_TOKEN is required.`
  );
  process.exit(1);
}

(async () => {
  const astraClient = await getAstraRestClient();

  // if data exists, don't proceed
  try {
    const { data, status } = await astraClient.get(
      `${tablesBasePath}/login/reedp`
    );
    console.log(data, status);
    if (status === 200) {
      process.exit();
    }
  } catch (e) {
    console.error(e);
  }

  // load collection data
  for (const collection of collections) {
    // load the collection data
    console.log(`Loading data for ${collection.schema.collectionName}`);
    const astraCollection = await getCollection(
      collection.schema.collectionName
    );
    const dataKeys = Object.keys(collection.data);
    for (const dataKey of dataKeys) {
      const docRes = await astraCollection.create(
        dataKey,
        collection.data[dataKey]
      );
      console.log(docRes);
    }
    console.log(`Data loaded for ${collection.schema.collectionName}`);
  }

  // load C* data
  for (const table of tables) {
    // create the table schema
    try {
      console.log(`Creating the ${table.schema.name} table...`);
      await astraClient.post(`${schemasBasePath}/tables`, table.schema);
      console.log(`Table ${table.schema.name} created`);
    } catch (e) {
      console.log(`Table ${table.schema.name} could not be created.`);
      console.error(e);
    }

    // load data
    for (const row of table.data) {
      console.log(`Loading data for ${table.schema.name}`);
      try {
        const { data, status } = await astraClient.post(
          `${tablesBasePath}/${table.schema.name}`,
          row
        );
        console.log(data, status);
      } catch (e) {
        console.error(e);
      }
      console.log(`Data loaded for ${table.schema.name}`);
    }
  }
})();
