exports = module.exports = (service, resp) => {
    return {
        postItem: async (req, res) => {
            let document,
                doc = req.body;

            try {
                document = await service.postItem(doc);

                res.send(resp.getResponse(document));
            } catch (error) {
                res.send(resp.getError(error));
            }
        },
        getAll: async (req, res) => {
            let document;

            try {
                document = await service.getAll();

                res.send(resp.getResponse(document));
            } catch (error) {
                res.send(resp.getError(error));
            }
        },
        removeOne: async (req, res) => {
            let document,
                id = req.params.id;

            try {
                document = await service.removeOne(id);

                res.send(resp.getResponse(document));
            } catch (error) {
                res.send(resp.getError(error));
            }
        },
        updateOne: async (req, res) => {
            let document,
                id = req.params.id,
                doc = req.body;
            try {
                document = await service.updateOne(id, doc);

                res.send(resp.getResponse(document));
            } catch (error) {
                res.send(resp.getError(error));
            }
        }

    }
}
exports['@singleton'] = true;
exports['@require'] = ['services/service', 'lib/responses'];