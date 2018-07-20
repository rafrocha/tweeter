"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      db.collection("users").insertOne(newTweet);
      callback(null, true);
    },

    // Deletes tweet in 'db'
    deleteTweet: function(id) {
      let idDel = id;
      db.collection("tweets").remove({ id: idDel });
    },

    // Get all tweets in `db`
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
      // const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      // callback(null, tweets.sort(sortNewestFirst));
    }
  };
}