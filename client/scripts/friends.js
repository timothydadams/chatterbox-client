var Friends = {

  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },

  toggleStatus: function(name, cb = () => {}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      cb(false);
    } else {
      Friends._data.add(name);
      cb(true);
    }
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  }

};