module.exports = function(opts) {
  //@TODO: create method Collection that will return
  // specific Collection object that has cRUD functionalities
  return {
    Connect: opts.adapter.connect.bind(opts.adapter);
    Disconnect: opts.adapter.disconnect.bind(opts.adapter);
  };
};
