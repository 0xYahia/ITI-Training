export default async function handler(req, res) {
  console.log(req.method);
  res.status(200).json({ name: "yahia" });
}
