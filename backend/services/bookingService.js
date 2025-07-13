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

export const getActiveBookingsByHotel = async (req, res) => {
  try {
    const { id } = req.params;

    const activeBookings = await Booking.find({
      hotel: id,
      status: "active",
      endDate: { $gte: new Date() },
    }).select("startDate endDate");
    res.json(activeBookings);
  } catch (error) {
    console.error("Error fetching hotel bookings:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createNewReservation = async (req, res) => {
  try {
    const { userId, hotelId, startDate, endDate, totalPrice } = req.body;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();

    if (start >= end) {
      return res
        .status(400)
        .json({ message: "End date must be after start date" });
    }

    if (start < now) {
      return res
        .status(400)
        .json({ message: "Start date cannot be in the past" });
    }

    const conflictingBooking = await Booking.findOne({
      hotel: hotelId,
      status: "active",
      $or: [
        { startDate: { $lte: start }, endDate: { $gt: start } },
        { startDate: { $lt: end }, endDate: { $gte: end } },
        { startDate: { $gte: start }, endDate: { $lte: end } },
      ],
    });

    if (conflictingBooking) {
      return res.status(400).json({
        message: "Selected dates are not available",
        conflictingDates: {
          startDate: conflictingBooking.startDate,
          endDate: conflictingBooking.endDate,
        },
      });
    }

    const newBooking = new Booking({
      user: userId,
      hotel: hotelId,
      startDate: start,
      endDate: end,
      totalPrice,
      status: "active",
    });

    await newBooking.save();

    await newBooking.populate([
      { path: "user", select: "name email" },
      { path: "hotel", select: "name location" },
    ]);

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error" });
  }
};
