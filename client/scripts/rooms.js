//model for rooms

var Rooms = {
/*
  private _data: new Set,

  selected: 'lobby',

  update: function(messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => {Rooms._data.add(room)});
  }
var x = new Set();
x.add(1);
x.add({ a: 2 });
//get iterator:
var it = x.values();
//get first entry:
var first = it.next();
//get value out of the iterator entry:
var value = first.value;
console.log(value); //1

*/

  _data: new Set,

  selected: 'lobby',

  isSelected: function(roomname) {
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
  },

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

  add: function (room, cb = () => {}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    cb(Rooms.items());
  },

  items: function() {
    return _.chain([...Rooms._data]);
  }
};

//future new rooms
//var newRoom = window.prompt('Enter a new room', 'type a room name');
//RoomsView.renderRoom(newRoom);