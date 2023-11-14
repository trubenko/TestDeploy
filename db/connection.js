'use strict';

const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = "mongodb+srv://TestTrubenko:SjEChkXOtoYGEvRd@testcluster.0usdk2e.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://TestTrubenko:<password>@testcluster.0usdk2e.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connect() {
  // const uri = "mongodb+srv://TestTrubenko:<password>@testcluster.0usdk2e.mongodb.net/?retryWrites=true&w=majority";
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("test").command({ ping: 1 });
//       // await client.db("test").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       console.log("You successfully disconnected from MongoDB!");
//       await client.close();
//     }
}
function commit(cb) {

    async function run() {
      try {
        client.connect();
        const database = client.db("test");
        const kitten = database.collection("kittens");
        // // Query for a movie that has the title 'The Room'
        // const query = { title: "The Room" };
        // const options = {
        //   // sort matched documents in descending order by rating
        //   sort: { "imdb.rating": -1 },
        //   // Include only the `title` and `imdb` fields in the returned document
        //   projection: { _id: 0, title: 1, imdb: 1 },
        // };
        // const movie = await movies.findOne(query, options);
        cb(client);
        // const kittens = await kitten.find({name: /Silence/});
        // since this method returns the matched document, not a cursor, print it directly
        // console.log(kittens);
      } finally {
        // await client.close();
      }
    }
    run().catch(console.dir);
}

module.exports = {
  connect: connect,
  commit: commit
}