var getobject = require('getobject');
var moment = require('moment');
var _ = require('lodash');
var Collection;

Collection = function(name, connection) {

    //@TODO: add instance validation of connection param

    this.name = name;
    this.connection = connection;

    return this;

}

Collection.prototype.find = function(criteria, opts, cb) {
  var result;
  result = this.connection.adapter.find(this, criteria, opts);
  return cb(null, result);
};

Collection.prototype.create = function(data, cb) {
  var result;
  result = this.connection.adapter.create(this, data);
  return cb(null, result);
};

Collection.prototype.save = function(identifier, data, cb) {
  var result;
  if (_.isEmpty(identifier)) {
    return cb(new Error('Arg `identifier` is required.'), null);
  }

  result = this.connection.adapter.save(this, identifier, data);
  return cb(null, result);
};

Collection.prototype.destroy = function(identifier, cb) {
  var result;

  if (_.isEmpty(identifier)) {
    return cb(new Error('Arg `identifier` is required.'), null);
  }

  return cb(null, result);
};

module.exports = Collection(name, connection);
