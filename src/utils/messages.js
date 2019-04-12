const generateMessage = (username, text) => {
    return {
        text,
        createdAt: new Date().getTime(),
        username
    }
}

const generateLocation = (username, Lat, Long) => {
    return {
        username,
        text: `https://google.com/maps?q=${Lat},${Long}`,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocation
}