import { Schema, model } from 'mongoose';

const donationSchema = new Schema({
  elderly_id: {
    type: Schema.Types.ObjectId,
    ref: 'Elderly', 
    required: true,
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: 'DonationType',
    required: true,
  },
  donation_name: {
    type: String,
    required: true, 
  },
  description: {
    type: String, 
    required: true,
  },
});

const Donation = model('Donation', donationSchema);

export default Donation;
