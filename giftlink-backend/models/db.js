require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (!dbInstance) {
        try {
            await client.connect();
            dbInstance = client.db(dbName);
            console.log('✅ Connected to GiftLing DB');
        } catch (error) {
            console.error('❌ Failed to connect:', error);
        }
    }
    return dbInstance;
}

module.exports = connectToDatabase;
