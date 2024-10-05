import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, trim: true, required: true },
  age: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  phoneNumber: { type: Number, required: true },
  role: { type: String, enum: ["elderly", "user","tutor","admin"], default: "user", required: true },
  social_media :  { type: String, required: false },
  location: [{ type: Schema.Types.ObjectId, ref: "Location", required:true  }], 
  password: { type: String, required: true },

});

const User = model('User', userSchema);

export default User;
