import { Schema, model } from 'mongoose';

const activityReviewSchema = new Schema({
  activityRequest_id: {
    type: Schema.Types.ObjectId,
    ref: 'ActivityRequest',
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
}, {
  timestamps: false,
  collection: 'activity_reviews',
});

const ActivityReview = model('ActivityReview', activityReviewSchema);

export default ActivityReview;
