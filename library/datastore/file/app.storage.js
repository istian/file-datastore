var Storage = require('./_base/storage');
var Collection = require('./_base/Collection');
var appStorage;

appStorage = (function() {
  var instance;

  function init(opts) {
    return new Storage(opts);
  }

  return {
    getInstance: function(opts) {
      if (!instance) {
        instance = init(opts);
      }

      return instance;
    },
    Collection: function(name) {
      return new Collection(name, instance);
    }
  };

})();

module.exports = appStorage;
