import { connectDatabase } from "../../../../helpers/mongo";

export const getFeedbackData = async () => {
  const client = await connectDatabase();
  const db = client.db();
  const feedback = await db.collection("feedback").find({}).toArray();
  client.close();
  return feedback;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;
    const client = await connectDatabase();
    const db = client.db();
    await db.collection("feedback").insertOne({ email, message });
    client.close();
    res.status(201).json({ staus: success, feedback: { email, message } });
  } else {
  }
}
