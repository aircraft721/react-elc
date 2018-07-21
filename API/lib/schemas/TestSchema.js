const mongoose = require('mongoose');

exports = module.exports = () => {
   return new mongoose.Schema({
            name: String,
            number: Number,
            title: String,
            description: String
        });
}

exports['@singleton'] = true;