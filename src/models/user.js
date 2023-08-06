const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true});

userSchema.pre('save', function (next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});

userSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (!update.password) {
        return next();
    }

    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(update.password, SALT);
    this.setUpdate({ password: encryptedPassword });
    next();
});

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;