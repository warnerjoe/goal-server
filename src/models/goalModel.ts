import mongoose, { Schema, Document } from 'mongoose';

// src/models/goalModel.ts
export interface Goal extends Document {
    title: string;
    description: string;
  }

const goalSchema: Schema = new Schema({
    title: { type: String, required: true },
    descrition: { type: String, required: true },
});

export const GoalModel = mongoose.model<Goal>("Goal", goalSchema);