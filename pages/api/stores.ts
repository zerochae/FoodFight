import { NextApiHandler } from "next";
import db from "db.json";

const handler: NextApiHandler = (req, res) => {
  try {
    res.status(200).json(JSON.stringify(db.stores));
  } catch (error) {
    res.status(500).json({ message: "server-error" });
  }
};

export default handler;
