exports = module.exports = () =>{
    return {
        http: {
            port: 3000, 
            host: 'localhost'
        }
    }

}

exports['@singleton'] = true;