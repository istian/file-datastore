var _ = require('lodash');
var Collection = require('./collection');

var Storage;

Storage = function(opts) {
  this.opts = _.assign({}, opts);
  this.adapter = require('./json.store')({data_path: opts.data_path});
};

Storage.prototype.Connect = function() {
  this.adapter.connect.apply(this);
}

Storage.prototype.Disconnect = function() {
  this.adapter.Disconnect.apply(this);
}


Storage.prototype.Collection = function(name) {
  return new Collection(name, this);
}

module.exports = Storage;
