import dbConnect from '../../../lib/dbConnect';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        res.send('Hello, this is register endpoint');
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      try {
        res.send('Hello, this is register endpoint');
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: 'method not supported!' });
      break;
  }
}
