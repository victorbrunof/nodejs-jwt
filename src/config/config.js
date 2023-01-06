var whitelist = ['http://localhost:3000']
const config = {
    cors: function (req, callback) {
        if (whitelist.indexOf(req.header('Origin')) != -1) {
            callback(null, true) // reflect (enable) the requested origin in the CORS response
        } else {
            callback(new Error('Not allowed by CORS')) // disable CORS for this request
        }
    }
}
module.exports = config;