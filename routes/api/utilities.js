const makeResponse = function(payload, message = 'success') {
    return {
        message: message,
        payload: payload,
    }
}

module.exports = makeResponse;