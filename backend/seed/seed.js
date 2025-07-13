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

    const hotels = [
      {
        name: "Hotel Dioklecijan",
        description: "Luksuzni hotel s pogledom na more",
        address: "Obala kneza Domagoja 1",
        city: "Split",
        pricePerNight: 150,
        rating: 4.7,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "bazen", "spa"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Peristil",
        description: "Smješten unutar Dioklecijanove palače",
        address: "Poljana Kraljice Jelene 5",
        city: "Split",
        pricePerNight: 110,
        rating: 4.3,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/589576929.jpg?k=b921d66a030381e04d8c314060a960d802a5b299faab0b5b4b2350727faa596b&o=",
        ],
        amenities: ["wifi", "restoran"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Adriatic",
        description: "Elegantno smješten uz obalu s panoramskim pogledom",
        address: "Ulica Hrvatskog proljeća 3",
        city: "Split",
        pricePerNight: 200,
        rating: 4.8,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "bazen", "restoran", "terasa"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Marul",
        description: "Moderni hotel sa vrhunskim sadržajem u centru grada",
        address: "Marulićev trg 2",
        city: "Split",
        pricePerNight: 120,
        rating: 4.5,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "spa", "restoran"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Kastel",
        description: "Hotel s povijesnim karakterom u blizini plaže",
        address: "Ulica Bregovita 6",
        city: "Split",
        pricePerNight: 95,
        rating: 4.1,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "restoran"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Split Beach",
        description: "Savršen smještaj uz obalu, idealno za obitelji",
        address: "Plaža Firule 4",
        city: "Split",
        pricePerNight: 140,
        rating: 4.6,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "bazen", "plaža", "restoran"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Palaca",
        description: "Vrhunski luksuz i privatnost u elitnom dijelu Splita",
        address: "Ulica Velog Varoša 8",
        city: "Split",
        pricePerNight: 250,
        rating: 5.0,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "spa", "restoran", "bazen", "privatnost"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Fortuna",
        description: "Savršen spoj povijesti i modernog luksuza",
        address: "Gundulićeva 3",
        city: "Split",
        pricePerNight: 175,
        rating: 4.4,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "restoran", "spa"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Zvonimir",
        description: "Romantični hotel sa starinskim šarmom u blizini plaže",
        address: "Zvonimirova 12",
        city: "Split",
        pricePerNight: 160,
        rating: 4.2,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "restoran", "plaža"],
        createdBy: admin._id,
      },
      {
        name: "Hotel Riva",
        description: "Vrhunski luksuz na obali s pogledom na marinu",
        address: "Ulica Riva 1",
        city: "Split",
        pricePerNight: 220,
        rating: 4.9,
        imageUrls: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/692601682.jpg?k=a72995d2bb3ff0c1b6e1f183cf85c77ff86bb73429f816ffd9b5189e81b009d2&o=",
        ],
        amenities: ["wifi", "spa", "restoran", "bazen"],
        createdBy: admin._id,
      },
    ];

    const insertedHotels = await Hotel.insertMany(hotels);

    const bookings = [
      {
        user: user._id,
        hotel: insertedHotels[0]._id,
        startDate: new Date("2025-09-01"),
        endDate: new Date("2025-09-07"),
        totalPrice: 1050,
        status: "active",
      },
      {
        user: user._id,
        hotel: insertedHotels[2]._id,
        startDate: new Date("2025-09-10"),
        endDate: new Date("2025-09-14"),
        totalPrice: 800,
        status: "active",
      },
      {
        user: user._id,
        hotel: insertedHotels[3]._id,
        startDate: new Date("2025-08-15"),
        endDate: new Date("2025-08-20"),
        totalPrice: 600,
        status: "active",
      },
      {
        user: user._id,
        hotel: insertedHotels[5]._id,
        startDate: new Date("2025-07-25"),
        endDate: new Date("2025-07-28"),
        totalPrice: 420,
        status: "active",
      },
      {
        user: user._id,
        hotel: insertedHotels[6]._id,
        startDate: new Date("2024-07-10"),
        endDate: new Date("2024-07-15"),
        totalPrice: 875,
        status: "completed",
      },
    ];

    await Booking.insertMany(bookings);

    console.log("Seed complete.");
    process.exit();
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
};

seed();
