import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
  elderly_id: {
    type: Schema.Types.ObjectId,
    ref: 'Elderly', 
    required: true,
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: 'ServiceType',
    required: true,
  },
  service_name: {
    type: String,
    required: true, 
  },
  description: {
    type: String, 
    required: true,
  },
  max_price: {
    type: Number, 
    required: false,
  },
  min_price: {
    type: Number,
    required: false,
  },
  experience: {
    type: String, 
    required: true,
  },
  knowledge: {
    type: String, 
    required: false,
  },
  reference: {
    type: String, 
    required: false,
  },
});

const Service = model('Service', serviceSchema);

export default Service;
