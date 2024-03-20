import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
  },
  emailVerified: {
    type: Date,
  },
  image: {
    type: String,
    trim: true,
    default:
      "https://lh3.googleusercontent.com/a/ACg8ocJ98xqUYSzTAw75yFxSXZc2Yt5SMFNjINvyT52sT-pb=s96-c",
  },
});

const registeredModel = models.User;
export default registeredModel || model("User", UserSchema);