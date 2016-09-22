var mongodb=require('mongodb');

exports.mongoClient=mongodb.MongoClient;
exports.init=function(callback) {
    exports.mongoClient.connect('mongodb://db.do5173.com:27017/test', function(err, pool) {
        if(err) return callback(err);
        exports.pool=pool;
        callback(null, pool);
    });
};


