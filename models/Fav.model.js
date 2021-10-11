const mongoose = require('mongoose');

const favSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Fav = mongoose.model('Fav', favSchema);
module.exports = Fav;