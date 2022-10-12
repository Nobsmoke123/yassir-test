import mongoose, { Schema } from 'mongoose';

const AirQualitySchema = new Schema(
  {
    ts: {
      type: String,
      required: true,
    },

    aqius: {
      type: Number,
      required: true,
    },

    mainus: {
      type: String,
      required: true,
    },

    aqicn: {
      type: Number,
      required: true,
    },

    maincn: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AirQualityModel = mongoose.model(
  'AirQualityModel',
  AirQualitySchema
);
