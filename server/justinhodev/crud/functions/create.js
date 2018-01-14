const MongoClient = require('mongodb').MongoClient;

let cache = null;

/**
 * My function
 * @param {number} id
 * @param {string} name
 * @param {string} type
 * @param {string} season
 * @param {string} style
 * @returns {any}
 */

module.exports = (id, name, type, season, style, context, callback) => {

  let clothes = {
    id: id,
    name: name,
    type: type,
    season: season,
    style: style
  };

  // let uri = process.env['MONGO_URI'];
  let uri = 'mongodb://nwhacks:wardrobe@ds255787.mlab.com:55787/clothes';

  try {
    if (cache == null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        createClothe(db, clothes, callback);
      });
    } else {
      createClothe(db, clothes, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }

}

const createClothe = (db, clothes, callback) => {
  db.collection('clothing').insertOne(clothes, (error, result) => {
    if (error) {
      console.log(error);
      return callback(null, error);
    }

    return callback(null, result.insertId);
  });
};
