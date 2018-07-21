// This is where the login should be done.
// Any manipulation of documents should be done here. 

exports = module.exports = (model) => {
    return {
        postItem: async (doc) => {

            return await model.insertDoc(doc);
        },
        getAll: async () => {
            return await model.getAll();
        },
        removeOne: async (id) => {
            return await model.removeOne(id);
        },
        updateOne: async (id, doc) => {
            return await model.updateOne(id, doc);
        }
    }
}

exports['@singleton'] = true;
exports['@require'] = ['models/model']