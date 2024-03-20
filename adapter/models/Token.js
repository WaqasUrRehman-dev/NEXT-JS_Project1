import { Schema, model, models } from "mongoose";

const tokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // Exprire in 5 mins
});

const Token = models.Token || model("Token", tokenSchema);
export default Token;
