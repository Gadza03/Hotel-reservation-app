import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, default: "Split" },
    pricePerNight: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    imageUrls: [{ type: String }],
    amenities: [{ type: String }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
