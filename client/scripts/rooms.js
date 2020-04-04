var Rooms = {
  add: function () {
    var newRoom = window.prompt('Enter a new room', 'type a room name');

    RoomsView.renderRoom(newRoom);
    // if (newRoom === null || newRoom === '') {
    //   RoomsView.$select.prepend(Rooms.render(newRoom));
    // }
  },

  render: _.template(`
    <option><%- obj %></option>
`)
};