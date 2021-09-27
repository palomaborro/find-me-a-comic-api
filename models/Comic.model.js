const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String
    },
    image : {
        type: String,
        required: true
    }, 
    }, {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    })

const Comic = mongoose.model('Comic', comicSchema);
module.exports = Comic;