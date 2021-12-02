const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const challengeSchema = new Schema(
    {
        restaurantId: {
            type: ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        foodItem: {
            type: Object,
            required: true
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        timeLimit: {    //minutes
            type: Number,
            required: true,
        },
        minParticipants: {
            type: Number,
            required: true,
        },
        maxParticipants: {
            type: Number,
            required: true,
        },
        vegetarian: {
            type: Number,
            required: true,
        },
        rules: {
            type: String,
            required: true,
        },
        fileName: {
            type: String
        },
        tags: {
            type: String
        },
        reward: {
            type: String,
            required: true
        },
        participationFee: {
            type: Object,
            required: true
        },
        autoBooking: {
            type: Boolean,
            required: true
        },
        isActive: {
            type: Boolean
        },
        createdDate: {
            type: Date
        },
        modifiedDate: {
            type: Date
        },
    },
    { versionKey: false }
);

module.exports = mongoose.model('challenge', challengeSchema);