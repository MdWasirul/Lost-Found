import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Please provide a description"]
    },
    category: {
      type: String,
      required: true // e.g., Electronics, Keys, Wallets
    },
    type: {
      type: String,
      enum: ['lost', 'found'],
      required: true
    },
    location: {
      type: String,
      required: [true, "Location is mandatory"]
    },
    date: {
      type: Date,
      default: Date.now
    },
    image: {
      type: String // URL from Cloudinary or local storage
    },
    // IMPORTANT: Reference to the User who created this report
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    isResolved: {
      type: Boolean,
      default: false
    }
  }, 
  { timestamps: true }
);

const Item = mongoose.model('Item', itemSchema);
export default Item;