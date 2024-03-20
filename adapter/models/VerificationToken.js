import { Schema, model, models } from "mongoose";

// @Schema
const VerificationTokenSchema = new Schema({
  expires: {
    type: Date,
    trim: true,
  },
  token: {
    type: String,
    trim: true,
  },
  identifier: {
    type: String,
    trim: true,
  },
});

// @Model
const registeredModel = models.VerificationToken;
export default registeredModel ||
  model("VerificationToken", VerificationTokenSchema);
