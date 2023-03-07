// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb'
import { env } from '@src/env/server.mjs'

if (!env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = env.MONGODB_URI as string // mongodb connection string
const options = {}

// useUnifiedTopology and useNewUrlParser removed based on:
// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.ts
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

let client
let clientPromise: Promise<MongoClient>

if (!env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env')
}

if (env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
