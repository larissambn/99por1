import { Schema, model } from 'mongoose';

// Define the activityCategory schema
const activityCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true, // Equivalent to allowNull: false
  },
});

// Create the activityCategory model
const ActivityCategory = model('ActivityCategory', activityCategorySchema);

export default ActivityCategory;