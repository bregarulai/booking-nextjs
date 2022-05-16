import dbConnect from '../../../lib/dbConnect';
import Hotel from '../../../models/Hotel';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const hotel = await Hotel.findById(req.query.id);
        res.status(200).json(hotel);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'PUT':
      try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
          req.query.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedHotel);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'DELETE':
      try {
        await Hotel.findByIdAndDelete(req.query.id);
        res.status(200).json(`Hotel ${req.query.id} has been deleted`);
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
