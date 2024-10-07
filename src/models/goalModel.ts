import mongoose, { Document, Schema } from 'mongoose';

// Define the Goal interface
export interface IGoal extends Document {
    title: string;
    completed: boolean;
}

// Create a schema for the Goal
const goalSchema: Schema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

// Create and export the Goal model
const GoalModel = mongoose.model<IGoal>('Goal', goalSchema);
export default GoalModel;  // Make sure you're exporting the model correctly
