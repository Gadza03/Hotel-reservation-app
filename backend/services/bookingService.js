import { Booking } from "../models/index.js";

export const getBookingsByUserId = async (req, res) => {
  const userId = req.params.id;

  try {
    const bookings = await Booking.find({ user: userId })
      .populate("hotel")
      .sort({ startDate: 1 });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings." });
  }
};
