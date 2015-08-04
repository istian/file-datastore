var path = require('path');

var Storage = require('./library/datastore/file/app.storage');
var clusterMapsCollection;

var appStorage = Storage.getInstance({
  data_path: path.resolve(__dirname, './data/data.json')
});

appStorage.Connect();

clusterMapsCollection = appStorage.Collection('cluster_maps');


clusterMapsCollection.find({id: 2}, function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log(result);
})
