class Utils {
    /**
     * 
     * @param {*} status 
     * @param {*} msg 
     * @param {*} success 
     * @param {*} data 
     */
    respondWith(status, msg, success, data) {
        return {
            success,
            status: typeof status === 'number' ? status : 200,
            message: msg.charAt(0).toUpperCase() + msg.slice(1),
            data: data !== null ? data : []
        }
    }
}

class CustomError extends Error {
    constructor(message, status) {
        super(message)
        this.name = this.constructor.name
        this.status = status
    }
}

module.exports = new Utils()
module.exports.CustomError = CustomError