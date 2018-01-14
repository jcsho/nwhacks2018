const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
 * 
 * @param {string} keyword
 * @returns {any}
 * 
 */
module.exports = (keyword, context, callback) => {
    let uri = 'mongodb://nwhacks:wardrobe@ds255787.mlab.com:55787/clothes';

    try {
        if(cache == null) {
            MongoClient.connect(uri, (error, db) => {
                if (error) {
                    console.log(error['errors']);
                    return callback(error);
                }

                cache = db;
                queryClothes(keyword, db, callback);
            });
        } else {
            queryClothes(keyword, db, callback);
        }
    } catch (error) {
        console.log(error);
        return callback(error);
    }
};

const queryClothes = (keyword = "casual", db, callback) => {
    let clothes = [];
    db.collection('clothing').find({style: keyword}).toArray((err, result) => {
        for (i = 0; i < result.length; i++) {
            clothes.push({
                id: result[i]._id,
                name: result[i].name,
                type: result[i].type,
                season: result[i].season,
                style: result[i].style
            });
        }

        console.log(clothes);
    });
};