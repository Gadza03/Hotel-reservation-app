import Hotel from "../models/hotel.js";

export const fetchAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addNewHotel = async (req, res) => {
  try {
    const hotel = new Hotel({
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      city: req.body.city || "Split",
      pricePerNight: req.body.pricePerNight,
      rating: req.body.rating || 0,
      imageUrls: req.body.imageUrls || [],
      amenities: req.body.amenities || [],
      createdBy: req.body.createdBy || null,
    });

    const newHotel = await hotel.save();
    return res.status(201).json(newHotel);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
