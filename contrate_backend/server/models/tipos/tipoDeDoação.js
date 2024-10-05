import { model, Schema } from "mongoose";

const donationTypeSchema = new Schema({
  donationType_name: { type: String, required: true },
  categoria_id: [{ type: Schema.Types.ObjectId, ref: "Category_donation", required: true  }], 
});

const DonationType = model('DonationType', donationTypeSchema);

export default DonationType;
