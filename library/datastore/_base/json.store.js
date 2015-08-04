var fs = require('graceful-fs');
var steno = require('steno');
var json = require('json-parse-helpfulerror');
var _ = require('lodash');
var getobject = require('getobject');

module.exports = function (opts) {
  var adapter = {};
  if (!opts.data_path) {
    throw new Error('Path to storage must be defined.');
  }

  adapter.opts = {
    data_path: opts.data_path
  };

  adapter.connect = connect.bind(adapter);
  adapter.disconnect = disconnect.bind(adapter);
  adapter.save = write.bind(adapter);
  adapter.getCollection = getCollection.bind(adapter);
  adapter.setData = setData.bind(adapter);
  adapter.getData = getData.bind(adapter);
  adapter.find = find.bind(adapter);

  return adapter;
};

function connect() {
  if (!fs.readFileSync(this.opts.data_path)) {
    throw new Error('Specied storage file does not exists.');
  }
  this._raw_data = fs.readFileSync(this.opts.data_path);
  this.setData();
}

function disconnect() {
  return true;
}

function write() {
  steno.writeFile(this.opts.data_path, this._raw_data, function (err) {
    if (err) throw err
  })
}

function getCollection(name) {
  return getobject.get(this._data, 'data.' + name);
}

function getData() {
  return this._data;
}

function setData() {
  this._data = json.parse(this._raw_data);
  if (this._data) {
    this._collections = _.keys(getobject.get(this._data, 'data'));
  }
}

function find(objCollection, criteria) {
  return _.find(this.getCollection(objCollection.name), criteria);
}
