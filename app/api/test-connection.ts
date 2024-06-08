import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb/database/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase();
    res.status(200).json({ message: "Connected to MongoDB successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error connecting to MongoDB" });
  }
}
