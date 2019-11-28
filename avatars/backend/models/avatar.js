const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/avatars-redux-backend');
mongoose.set('debug', true);
mongoose.Promise = Promise;

const avatarSchema = new mongoose.Schema({
    name: String,
    img_url: String,
    descrpn: String,
    completed: Boolean
});

const avatarModule = mongoose.model('Avatar', avatarSchema);

module.exports = avatarModule;
