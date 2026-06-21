import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Shorts', 'Compression', 'Gloves', 'Other'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  sizes: {
    type: [String],
    default: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  colors: {
    type: [String],
    default: ['Black', 'White', 'Gray'],
  },
  stock: {
    type: Number,
    default: 50,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Product', productSchema);
