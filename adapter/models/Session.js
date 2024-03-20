import { Schema, model, models } from "mongoose";

// @Schema
const SessionSchema = new Schema({
  expires: {
    type: Date,
    trim: true,
  },
  sessionToken: {
    type: String,
    trim: true,
  },
  userId: {
    type: String,
    ref: "User",
  },
});

// @Model
const registeredModel = models.Session;
export default registeredModel || model("Session", SessionSchema);
