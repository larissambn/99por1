import { model, Schema } from "mongoose";

const locationSchema = new Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  neighborhood: { type: String, required: true },
});

const Location = model('Location', locationSchema);

export default Location;