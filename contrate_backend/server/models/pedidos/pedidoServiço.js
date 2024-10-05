import { model, Schema } from "mongoose";

// Define the ServiceRequest Schema
const serviceRequestSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId, 
    ref: 'Service',
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Requested', 'Approved', 'Denied', 'Finished'], 
    default: 'Requested',
    required: true,
  },
  request_date: {
    type: Date,
    default: Date.now(), 
    required: true,
  },
  scheduled_date: {
    type: Date,
    required: true,
  },
  completion_date: {
    type: Date,
    required: false, 
  },
  description: {
    type: String, 
    required: true,
  },
});

// Create the ServiceRequest model
const ServiceRequest = model('ServiceRequest', serviceRequestSchema);

export default ServiceRequest;
