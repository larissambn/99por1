import { Schema, model } from 'mongoose';

const donationReviewSchema = new Schema({
  donationRequest_id: {
    type: Schema.Types.ObjectId,
    ref: 'DonationRequest',
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
  collection: 'donation_reviews',
});

const DonationReview = model('DonationReview', donationReviewSchema);

export default DonationReview;
