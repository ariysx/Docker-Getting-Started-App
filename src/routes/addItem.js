const db = require('../persistence');
const uuid = require('uuid/v4');

module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        name: req.body.name,
        color: req.body.color,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
