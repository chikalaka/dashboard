// import express from 'express';
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
_ = require('lodash');

const dataRouter = require('./dataRouter');

const app = express();

const hostname = 'localhost';
const port = 3000;

const dbName = 'myapp';
const dbPort = 27017;

app.get('/api/data', function (req, res, next) {
  MongoClient.connect(`mongodb://${hostname}:${dbPort}/${dbName}`, function (err, db) {
    if (err) throw err;

    db.collection('data').find().toArray(function (err, result) {
      if (err) throw err;

      res.send({data: result});
    });
  });
});

app.use(express.static(__dirname + '/'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
