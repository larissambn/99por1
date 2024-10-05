import { Schema, model } from 'mongoose';

const serviceReviewSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true, 
  },
  rating_elderly: {
    type: Number,
    required: true, 
    min: 0,
    max: 5, 
  },
  comment_elderly: {
    type: String, 
    required: false, 
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true, 
  },
  rating_user: {
    type: Number,
    required: true, 
    min: 0, 
    max: 5, 
  },
  comment_user: {
    type: String, 
    required: false, 
  }
});

const ServiceReview = model('ServiceReview', serviceReviewSchema);

export default ServiceReview;
