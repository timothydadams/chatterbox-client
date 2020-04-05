// Looks like Fred is storing the results array returned from the ajax call in Messages

var Messages = {

  //private data storage property for object
  _data: {},

  //add method - adds messages to our Messages data object
  add: function(message, cb = () => {}) {
    Messages._data[message.objectId] = message;
    cb(Messages.items());
  },

  //update method - makes sure our messages don't have empty properties
  update: function(messages, cb = ()=>{}) {
    for (var msg of messages) {
      Messages._data[msg.objectId] = Messages._conform(msg);
    }
    cb();
  },

  //_conform method to add default values to make sure ALL messages are renderable by template
  _conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || 'Anonymous';
    message.roomname = message.roomname || '';
    return message;
  },

  //items method to add chaining capability
  items: function() {
    return _.chain(Messages._data);
  }

};