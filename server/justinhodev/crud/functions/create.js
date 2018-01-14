const MongoClient = require('mongodb').MongoClient;

let cache = null;

/**
 * @returns {any}
 */

module.exports = (context, callback) => {
  let id = context.params.id;
  let name = context.params.name;
  let type = context.params.type;
  let season = context.params.season;
  let style = context.params.style;

  let clothes = {
    id: id,
    name: name,
    type: type,
    season: season,
    style: style
  };

  let uri = process.env['MONGO_URI'];

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
  db.collection('clothes').insertOne(clothes, (error, result) => {
    if (error) {
      console.log(error);
      return callback(null, error);
    }

    return callback(null, result.insertId);
  });
};
