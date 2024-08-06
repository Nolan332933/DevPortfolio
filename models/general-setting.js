import { Schema, model, models } from "mongoose";

const GeneralSettingSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    value: {
      type: String,
      require: [true, "value is required"],
    },
    type: {
      type: String,
      require: [true, "type is required"],
    },
  },
  {
    timestamps: true,
  }
);

const GeneralSetting =
  models.GeneralSetting || model("GeneralSetting", GeneralSettingSchema);
export default GeneralSetting;
