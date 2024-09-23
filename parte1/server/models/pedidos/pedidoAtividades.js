import { model, Schema } from "mongoose";

// Define the ActivityRequest Schema
const activityRequestSchema = new Schema({
  activity_id: {
    type: Schema.Types.ObjectId, 
    ref: 'Activity',
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
  request_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

// Create the ActivityRequest model
const ActivityRequest = model('ActivityRequest', activityRequestSchema);

export default ActivityRequest;
