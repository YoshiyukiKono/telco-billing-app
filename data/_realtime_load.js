require("dotenv").config();
const {
  getCollection,
  getAstraRestClient,
} = require("../functions/utils/astraClient");

// load C* data
const dailyDataUsage = require("./daily_data_usage.json");
const tables = [dailyDataUsage];

const schemasBasePath = `/api/rest/v2/schemas/keyspaces/${process.env.ASTRA_DB_KEYSPACE}`;
const tablesBasePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}`;

if (!process.env.ASTRA_DB_APPLICATION_TOKEN) {
  console.error(
    `A .env file with your ASTRA_DB_APPLICATION_TOKEN is required.`
  );
  process.exit(1);
}


//const tpl = '{ "date" : 17, "datausage": 24.0,"month": 6,"year": 2021,"day": "T", "accountno": 100001 }'
const tpl_obj = { "date" : 17, "datausage": 24.0,"month": 6,"year": 2021,"day": "T", "accountno": 100001 };
const table_schema_name = 'daily_data_usage';

(async () => {
  const astraClient = await getAstraRestClient();
  date = 1
  // load data
  var id = setInterval (function() {
    console.log(`Loading data for ${table_schema_name}`);
    row = tpl_obj;
    row.date = date++;
    row.datausage = Math.random(25);
    console.log(`Loading data: ${row}`);
    try {
      //const { data, status } = await astraClient.post(
      const { data, status } = astraClient.post(
        `${tablesBasePath}/${table_schema_name}`,
        row
      );
      console.log(data, status);
    } catch (e) {
      console.error(e);
    }
    console.log(`Data loaded for ${table_schema_name}`);
  }, 1000);

})();
