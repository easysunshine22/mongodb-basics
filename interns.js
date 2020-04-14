const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("eaxysunshine");
  const mymovies = [
    {movie: "The Banker", year: "2020", rating: 8},  
    {movie: "Bad Boys", year: "2020", rating: 7}, 
    {movie: "The Hunt", year: "2020", rating: 7},
    {movie: "Bloodshot", year: "2020", rating: 7.5}, 
    {movie: "First Cow", year: "2020", rating: 6.5}
  ];
  dbo.collection("myMovies").insertMany(mymovies, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});