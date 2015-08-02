var _ = require('lodash');

var Storage;

Storage = function(opts) {
  this.opts = _.assign({}, opts);
};

Storage.prototype.Connect = function() {
  this.opts.adapter.connect.apply(this);
}

Storage.prototype.Disconnect = function() {
  this.opts.adapter.Disconnect.apply(this);
}

module.exports = Storage;
