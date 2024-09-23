import { model, Schema } from "mongoose";

const activityTypeSchema = new Schema({
  activityType_name: { type: String, required: true },
  categoria_id: [{ type: Schema.Types.ObjectId, ref: "Category_activity", required: true  }], 
});

const ActivityType = model('ActivityType', activityTypeSchema);

export default ActivityType;
