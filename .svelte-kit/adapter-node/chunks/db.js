import { MongoClient } from "mongodb";
const uri = "mongodb+srv://duhechen1009:l8uoWg6hXzR4ojC7@dev-cluster.4fnpbzu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
await client.connect();
const db = client.db("vabsite");
export {
  db as d
};
