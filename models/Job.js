import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    // company: {
    //   type: String,
    //   required: [true, 'Please provide company'],
    //   maxlength: 50,
    // },
    position: {
      type: String,
      required: [true, "Please provide expense_Name"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["Food", "Clothing", "Movie", "Bike", "others"],
      default: "Food",
      required: true,
    },
    expense_date: {
      type: Date,
      default: " ",
      required: true,
    },
    company: {
      type: Number,
      default: 0,
      required: true
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema)
