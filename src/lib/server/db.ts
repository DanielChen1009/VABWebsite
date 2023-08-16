// eslint-disable-next-line @typescript-eslint/no-var-requires
import { MongoClient} from "mongodb";
const uri = "mongodb+srv://duhechen1009:l8uoWg6hXzR4ojC7@dev-cluster.4fnpbzu.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

await client.connect();
export default client.db('vabsite')