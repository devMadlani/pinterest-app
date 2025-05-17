import mongoose, { Schema } from "mongoose";

const followSchema = new Schema(
  {
    followers: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    following: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Follow", followSchema);
