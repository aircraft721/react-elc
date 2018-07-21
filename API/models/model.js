const mongoose = require('mongoose');

exports = module.exports = (testSchema) => {
    mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true })
    mongoose.Promise = global.Promise;
    let db = mongoose.connection;

    db.on('error', console.log.bind(console, 'Mongo is not connected'))
        .once('open', console.log.bind(console, 'Mongo is connected'));

    let Model = mongoose.model('Data', testSchema);

    return {
        insertDoc: async (doc) => {
            let document;
            let model = new Model(doc);

            document = await model.save();

            return document;
        },
        getAll: async () => {
            let document;

            document = await Model.find({});

            return document;
        },
        removeOne: async (id) => {
            let document;

            document = await Model.deleteOne({ _id: id });

            return document;
        },
        updateOne: async (id, doc) => {
            let document;

            document = await Model.findOneAndUpdate(id, doc);

            return document;
        }
    }


}

exports['@singleton'] = true;
exports['@require'] = ['lib/schemas/TestSchema']