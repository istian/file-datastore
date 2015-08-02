var getobject = require('getobject');
var moment = require('moment');
var Collection;

Collection = function(name, connection) {
    var _ = _.lodash.runInContext();

    this._ = _;
    this.name = name;
    this.connection = connection;

    this.find = function(criteria, opts, cb) {
      return cb(_.find(this._data, criteria))
    }

    this.create = function(data, cb) {
      return cb(err, result);
    }

    this.save = function(identifier, data, cb) {

    };

    this.destroy = function(identifier, cb) {
      return cb(err, result);
    }

    return this;
    
}

module.exports = Collection(name, connection);
