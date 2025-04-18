const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["vendor", "user"], required: true },

    // Profile-related fields (optional at registration)
    bio: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    availability: { type: Boolean, default: true },
    notAvailableDates: { type: [Date], default: [] },
    price: { type: Number }, // can be added later
    review: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },

    acceptedTerms: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Prevent overwriting error
module.exports = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);
