import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  return res.status(200).json({ success: true, message: 'connected' });
}
