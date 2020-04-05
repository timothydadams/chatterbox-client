//model for rooms

var Rooms = {

  _data: new Set,

  selected: 'lobby',

  isSelected: function(roomname) {
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
  },

  // Generates the list of room names from available messages
  update: function(messages, cb = () => {}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .sortBy()
      .each(room => { Rooms._data.add(room); });

    if (Rooms.selected === null) {
      Rooms.selected = Rooms._data.values().next().value;
    }

    if (Rooms._data.size !== length) {
      cb(Rooms.items());
    }

  },

  //adds new rooms to the _data Set, used by update method and RoomsView.handleClick
  add: function (room, cb = () => {}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    cb(Rooms.items());
  },

  // Generates array for chaining HOF (underscore)
  items: function() {
    return _.chain([...Rooms._data]);
  }
};