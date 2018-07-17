exports = module.exports = () =>{
    return {
        http: {
            port: 3000 || process.env.port,
            host: 'localhost' || process.env.host
        }
    }

}

exports['@singleton'] = true;