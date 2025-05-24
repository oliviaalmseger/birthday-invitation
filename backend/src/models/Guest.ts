import mongoose, { Document, Schema } from 'mongoose';

export interface Guest extends Document {
  name: string;
  attending: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const guestSchema = new Schema<Guest>({
  name: { type: String, required: true },
  attending: { type: Boolean, required: true },
},
{ timestamps: true }
);

export const GuestModel = mongoose.model<Guest>('Guest', guestSchema, 'rsvp');
