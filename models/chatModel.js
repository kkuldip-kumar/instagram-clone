const mongoose = require('mongoose');
const {Schema } = require('mongoose');


const chatSchema = new Schema({

    users:[{
        type: Schema.Types.ObjectId,
        ref:'User'
    }],
    recentMessage:{
        type:Schema.Types.ObjectId,
        ref:'Message'
        
    },

},{timestamps:true}

);


module.exports = mongoose.model('Chat', chatSchema);
