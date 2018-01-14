const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
* @param {array} ids
* @param {boolean} completed
* @returns {any}
*/
module.exports = (ids, completed, context, callback) => {
  let uri = process.env['MONGO_URI'];
  ids = ids.map(id => new mongodb.ObjectID(id));

  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        updateClothes(db, ids, completed, callback);
      });
    } else {
      updateClothes(cache, ids, completed, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const updateClothes = (db, ids, name, type, season, style, callback) => {
  db
    .collection('clothes')
    .updateMany(
      { _id: { $in: ids } },
      { $set: 
        { 
          name: name,
          type: type,
          season: season,
          style: style
        } 
      },
      (error, result) => {
        if (error) {
          console.log(error);
          return callback(null, error);
        }
        return callback(null, result);
      }
    );
};
