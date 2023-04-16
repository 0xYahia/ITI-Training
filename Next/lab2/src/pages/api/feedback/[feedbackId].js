import { ObjectId } from "mongodb";
import { getFeedbackData } from ".";
import { connectDatabase } from "../../../../helpers/mongo";

export default async function handler(req, res) {
  const { feedbackId } = req.useMediaQuery;
  console.log(feedbackId);
  // const data = getFeedbackData();
  // const feedback = data.find((item) => item.id === feedbackId);
  const client = await connectDatabase();
  const db = client.db();
  const feedback = await db.collection("feedack").findOne({ _id: new ObjectId (feedbackId) });
  console.log(feedback);
  client.close();
  res.status(200).json({ message: "hello", feedback: {} });
}
