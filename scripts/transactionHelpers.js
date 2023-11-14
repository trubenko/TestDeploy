let db = require('../db/connection')
function wrap(f) {
    db.commit(f);
}

module.exports = {
    wrap: wrap
}