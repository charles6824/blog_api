import mongoose from 'mongoose'
const Schema = mongoose.Schema;

// Define the main blog post schema
const BlogSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
});


// Create model for Blog schema
const Blog = mongoose.model('Blog', BlogSchema);

export { Blog };
