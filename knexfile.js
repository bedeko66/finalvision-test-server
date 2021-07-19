const knex = require('knex');

const connectKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "./db/uform_db.sqlite3"
    },
    useNullAsDefault: true
});

module.exports = connectKnex;
