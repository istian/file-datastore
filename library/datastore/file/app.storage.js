var Storage = require('./../_base/storage');
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
    }
  };

})();

module.exports = appStorage;
