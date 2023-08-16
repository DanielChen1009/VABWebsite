// eslint-disable-next-line @typescript-eslint/no-var-requires
import { default as mongodb } from 'mongodb';
const MongoClient = mongodb.MongoClient;
// import { DB_URI } from '$env/static/private'
// const uri = DB_URI;
const uri = process.env.DB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

await client.connect();
export default client.db('vabsite')