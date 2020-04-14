var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("eaxysunshine");
  dbo.collection("myMovies").find({}, { projection: { _id: 0, movie: 1} }).toArray(function(err, res) {
    if (err) throw err;
    console.log("Retun on the movie title with a projection");
    console.log(res);
    db.close();
  });
});