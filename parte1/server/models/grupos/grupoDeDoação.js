import { Schema, model } from 'mongoose';

// Define the donationCategory schema
const donationCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true, // Equivalent to allowNull: false
  },
});

// Create the donationCategory model
const DonationCategory = model('DonationCategory', donationCategorySchema);

export default DonationCategory;
