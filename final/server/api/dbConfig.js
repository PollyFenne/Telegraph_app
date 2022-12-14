const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION;
// const connectionUrl = 'mongodb://localhost:27017';
// const url = 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME

const init = async () => {
  let client = await MongoClient.connect(connectionUrl, {useUnifiedTopology: true})
  console.log('connected to database!', dbName)
  return client.db(dbName)
}

module.exports = { init };
