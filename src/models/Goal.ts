import mongoose, { Schema, Document } from 'mongoose';

// Goal model interface
export interface IGoal extends Document {
  title: string;
  completed: boolean;
}

// Define the Goal schema
const GoalSchema: Schema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<IGoal>('Goal', GoalSchema);