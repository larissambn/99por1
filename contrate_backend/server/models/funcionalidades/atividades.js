import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  elderly_id: {
    type: Schema.Types.ObjectId,
    ref: 'Elderly', 
    required: true,
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: 'activityType',
    required: true,
  },
  activity_name: {
    type: String,
    required: true, 
  },
  description: {
    type: String, 
    required: true,
  },
});

const Activity = model('Activity', activitySchema);

export default Activity;
