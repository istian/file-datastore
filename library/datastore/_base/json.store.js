var fs = require('graceful-fs');
var steno = require('steno');
var json = require('json-parse-helpfulerror');
var _ = require('lodash');
var getobject = require('getobject');

module.exports = function (opts) {
  var adapter = {};
  if (!opts.storage_path) {
    throw new Error('Path to storage must be defined.');
  }
  adapter.opts = {
    storage_path: opts.storage_path
  };
  adapter.connect = connect.bind(this);
  adapter.disconnect = disconnect.bind(this);
  adapter.setCollection = setCollection.bind(this);
  adapter.save = write.bind(this);
  return adapter;
};

function connect() {
  if (!fs.readFileSync(this.opts.storage_path)) {
    throw new Error('Specied storage file does not exists.');
  }
  this._raw_data = fs.readFileSync(this.opts.storage_path);
  this.setData();
}

function disconnect() {
  return true;
}

function write() {
  steno.writeFile(this.opts.storage_path, this._raw_data, function (err) {
    if (err) throw err
  })
}

function setCollection(data) {
  
}

function getCollection(name) {
  return getobject.get(this._collections, name);
}

function getData() {
  return this._data;
}

function setData() {
  this._data = json.parse(this._raw_data);
  if (this._data) {
    this._collections = _.keys(getobject(this._data, 'data'));
  }
}
