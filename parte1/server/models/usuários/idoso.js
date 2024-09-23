import { Schema, model } from 'mongoose';

const elderlySchema = new Schema({
  
  user_id: {
    type: Schema.Types.ObjectId,  
    ref: 'User',
    required: true  
  },
  
  tutor_id: {
    type: Schema.Types.ObjectId,  
    ref: 'Tutor',
    required: false  
  },
});

// Export the Elderly model
const Elderly = model('Elderly', elderlySchema);

export default Elderly;
