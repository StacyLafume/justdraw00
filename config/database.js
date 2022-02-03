

module.exports = {

    'url' : `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0-x3ldo.mongodb.net/justdraw?retryWrites=true&w=majority`, // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'dbName': process.env.DB_NAME

};
