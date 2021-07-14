
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema= new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        max : 9,
        min:2,
    },

    userTodo: {
        type: String,
    },

    isActive: {
        type: Boolean,
        required: false,
        unique: false,
        default : true
    },

    dateJoin: {
        type: Date,
        required: false,
        unique: false,
        default : Date.now()
    },
});

const usersModel = mongoose.model('users',userSchema);
module.exports = usersModel;