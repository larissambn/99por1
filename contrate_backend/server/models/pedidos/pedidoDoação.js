import { model, Schema } from "mongoose";

// Define the DonationRequest Schema
const donationRequestSchema = new Schema({
  donation_id: {
    type: Schema.Types.ObjectId, 
    ref: 'Donation',
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

// Create the DonationRequest model
const DonationRequest = model('DonationRequest', donationRequestSchema);

export default DonationRequest;
