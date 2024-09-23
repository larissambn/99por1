import { model, Schema } from "mongoose";

const serviceTypeSchema = new Schema({
  serviceType_name: { type: String, required: true },
  categoria_id: [{ type: Schema.Types.ObjectId, ref: "Categoria_serviços", required: true  }], 
});

const ServiceType = model('ServiceType', serviceTypeSchema);

export default ServiceType;
