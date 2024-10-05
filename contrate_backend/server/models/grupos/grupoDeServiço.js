import { Schema, model } from 'mongoose';

// Define the ServiceCategory schema
const serviceCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true, // Equivalent to allowNull: false
  },
});

// Create the ServiceCategory model
const ServiceCategory = model('ServiceCategory', serviceCategorySchema);

export default ServiceCategory;
