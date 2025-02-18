import mongoose, { models,Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other","male","female","other"],
    default: "Other",
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  bet: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bet",
    },
  ],
},{timestamps:true});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
export const User =models.User || mongoose.model("User", userSchema);
