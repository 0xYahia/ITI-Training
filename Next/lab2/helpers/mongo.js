import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    return client;
  } catch (error) {
    console.log(error);
  }
};
