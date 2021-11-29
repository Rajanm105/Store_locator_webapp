const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    password: {type: String},
    role: {type: String, default: 'producer', enum: ['producer','customer']}
})


module.exports = User = mongoose.model('User', UserSchema);