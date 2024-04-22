const { Pool } = require('pg');

const PG_URI = 'postgres://ezuknczf:Vge_j2z__npToJYGwC79w4-RLh9qLELx@jelani.db.elephantsql.com/ezuknczf';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
