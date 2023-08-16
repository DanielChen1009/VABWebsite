import mongodb from "mongodb";
const DB_URI = "mongodb+srv://duhechen1009:l8uoWg6hXzR4ojC7@dev-cluster.4fnpbzu.mongodb.net/?retryWrites=true&w=majority";
const MongoClient = mongodb.MongoClient;
const uri = DB_URI;
const client = new MongoClient(uri);
await client.connect();
const db = client.db("vabsite");
export {
  db as d
};
