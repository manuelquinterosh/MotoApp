const {Schema, model} = require('mongoose');

const MotoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    user_moto: {
        type: String,
        
    },
}, 
{
    timestamps: true
})

module.exports = model('Moto', MotoSchema);