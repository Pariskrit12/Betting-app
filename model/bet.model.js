import mongoose, { Schema } from "mongoose";

const betSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    match: {
      type: Schema.Types.ObjectId,
      ref: "Match",
    },
    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Won", "Pending", "Lost"],
      default: "Pending",
    },
    outcome: {
      type: String,
      enum: ["team1", "team2", "draw", null],
      default: null,
    },
    potentialWinning: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Bet = mongoose.model("Bet", betSchema);
