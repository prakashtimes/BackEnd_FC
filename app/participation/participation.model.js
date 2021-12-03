const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const participationSchema = new Schema(
    {
        customerId : {
            type : ObjectId,
            required : true
        },
        challengeId : {
            type : ObjectId,
            required : true
        },
        challengeCompletionStatus : {
            type : Boolean,
            required : true,
            default : false
        },
        comments : {
            type : String,
            required : false
        },  
        requestPending : {
            type : Boolean,
            default : false
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model('participation', participationSchema);