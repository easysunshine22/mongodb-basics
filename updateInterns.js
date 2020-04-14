const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("eaxysunshine");
  const mymovies = { movie: "The Banker" };
  const update = { $set: {movie: "Killerman", year: "2020", rating: 9 } };
  dbo.collection("myMovies").updateOne(mymovies, update, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
