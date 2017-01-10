module.exports = {
    generateSession,
    notFound
}

const token = 'dsfsdfevdsv1231233wefsdfc3244';

function generateSession(req, res) {
    res.json({ token });
}

function notFound(req, res) {
    res.status(404).send();
}

