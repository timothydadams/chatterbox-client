var Friends = {

  _data: new Set,

  items: function() { // Converting the Set to an array for chaining
    return _.chain([...Friends._data]);
  },

  //adds and removes friends, used in messagesView
  toggleStatus: function(name, cb = () => {}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      cb(false);
    } else {
      Friends._data.add(name);
      cb(true);
    }
  },

  // Checks if current user is in friends list. Used in MessageView template
  isFriend: function(name) {
    return Friends._data.has(name);
  }

};