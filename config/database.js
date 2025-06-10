module.exports = {
    url: `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}` +
         `@cluster0.xuwmnvb.mongodb.net/${process.env.DB_NAME}` +
         `?retryWrites=true&w=majority&appName=Cluster0`,
    dbName: process.env.DB_NAME
  };