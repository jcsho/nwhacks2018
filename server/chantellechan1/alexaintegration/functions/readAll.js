const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
 * @returns {array}
 */
module.exports = (context, callback) => {
  let uri = 'mongodb://nwhacks:wardrobe@ds255787.mlab.com:55787/clothes';

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
  let cursor = db.collection('clothing').find();
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
