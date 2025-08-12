import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String }, // not required for draft
  description: { type: String }, // not required for draft
  price: { type: Number }, // not required for draft
  category: { type: String },
  image: { type: String }, // store uploaded image filename or URL
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  createdAt: { type: Date, default: Date.now }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
