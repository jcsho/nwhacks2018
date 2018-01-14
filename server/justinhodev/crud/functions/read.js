const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
* @returns {array}
*/
module.exports = (context, callback) => {
  let uri = process.env['MONGO_URI'];

  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        readClothes(db, callback);
      });
    } else {
      readClothes(cache, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const readClothes = (db, callback) => {
  let cursor = db.collection('clothes').find();
  let clothes = [];
  cursor.each((error, item) => {
    if (error) {
      console.log(error);
    }

    if (item == null) {
      return callback(null, clothes);
    }

    clothes.push({
      id: item._id,
      name: item.name,
      type: item.type,
      season: item.season,
      style: item.style
    });
  });
};
