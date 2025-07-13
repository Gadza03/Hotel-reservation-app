import { User } from "../models/index.js";

export const toggleWishlist = async (req, res) => {
  const { hotelId, userId } = req.body;

  if (!userId || !hotelId) {
    return res
      .status(400)
      .json({ message: "User ID and Hotel ID are required." });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    const index = user.wishlist.indexOf(hotelId);
    let action = "";

    if (index === -1) {
      user.wishlist.push(hotelId);
      action = "added";
    } else {
      user.wishlist.splice(index, 1);
      action = "removed";
    }

    await user.save();

    return res.status(200).json({
      message: `Hotel ${action} from wishlist.`,
      wishlist: user.wishlist,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getWishlist = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).populate("wishlist");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
