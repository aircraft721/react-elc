exports = module.exports = () => {

    return {
        getResponse(data){
            return {
                success: true,
                data: data
            }
        },
        getError(data){
            return {
                success: false,
                msg: data
            }
        }
    }

}

exports['@singleton'] = true;