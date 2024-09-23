import { model, Schema } from "mongoose";

const tutorSchema = new Schema({
  user_id: [{ type: Schema.Types.ObjectId, ref: "User" }],
  dependency: { type: String, required: true },
  relationship: { type: String, required: true }
});

const Tutor = model('Tutor', tutorSchema);

export default Tutor;
