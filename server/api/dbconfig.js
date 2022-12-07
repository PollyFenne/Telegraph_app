const { MongoClient } = require('mongodb');
const envurl = process.env.DB_CONNECTION;

const dbName = process.env.DB_NAME;

const initi = async () => {
    let userClient = await MongoClient.connect(envurl)
    console.log('am i working? am i connected to db?', dbName)
    return userClient.db(dbname);    
}

module.exports = { initi }
const mongo = new MongoClient()