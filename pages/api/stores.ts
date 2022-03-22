import { NextApiHandler } from "next";
import db from "db.json";

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(db.stores);
};

export default handler;
