module.exports = {
    generateSession,
    notFound
}

function generateSession(req, res) {
    res.json({
        token: 'dsfsdfevdsv1231233wefsdfc3244'
    });
}

function notFound(req, res) {
    res.status(404).send();
}