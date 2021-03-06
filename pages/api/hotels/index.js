import dbConnect from '../../../lib/dbConnect';
import Hotel from '../../../models/Hotel';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      const newHotel = new Hotel(req.body);
      try {
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
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
