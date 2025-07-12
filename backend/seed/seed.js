import mongoose from "mongoose";
import dotenv from "dotenv";
import { Booking, Hotel, Review, User } from "../models/index.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to DB");

    await Review.deleteMany();
    await User.deleteMany();
    await Hotel.deleteMany();
    await Booking.deleteMany();

    const user = await User.create({
      firstName: "Mate",
      lastName: "Gadža",
      email: "mate@example.com",
      password: "123456",
      isAdmin: false,
    });

    const admin = await User.create({
      firstName: "Admin",
      lastName: "Split",
      email: "admin@hotel.com",
      password: "adminpass",
      isAdmin: true,
    });

    const hotel1 = await Hotel.create({
      name: "Hotel Dioklecijan",
      description: "Luksuzni hotel s pogledom na more",
      address: "Obala kneza Domagoja 1",
      city: "Split",
      pricePerNight: 150,
      rating: 4.7,
      imageUrls: ["https://via.placeholder.com/300x200"],
      amenities: ["wifi", "bazen", "spa"],
      createdBy: admin._id,
    });

    const hotel2 = await Hotel.create({
      name: "Hotel Peristil",
      description: "Smješten unutar Dioklecijanove palače",
      address: "Poljana Kraljice Jelene 5",
      city: "Split",
      pricePerNight: 110,
      rating: 4.3,
      imageUrls: ["https://via.placeholder.com/300x200"],
      amenities: ["wifi", "restoran"],
      createdBy: admin._id,
    });

    await Booking.create({
      user: user._id,
      hotel: hotel1._id,
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-08-05"),
      totalPrice: 600,
      status: "active",
    });

    console.log("Seed complete.");
    process.exit();
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
};

seed();
