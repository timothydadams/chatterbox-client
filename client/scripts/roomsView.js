
/*
  Called by app.js
*/
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Event handler for rooms button click
    RoomsView.$button.on('click', RoomsView.handleClick);
    // Event handler for rooms dropdown select (change)
    RoomsView.$select.on('change', RoomsView.handleChange);

  },

  // Builds the list of room names in the select dropdown
  render: function() {
    RoomsView.$select.html('');
    Rooms.items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  //generates each drop-down item option
  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },

  // Handles creation of new rooms
  handleClick: function(event) {
    var roomname = prompt('Enter a room:');
    if (roomname) {
      Rooms.add(roomname, ()=>{
        RoomsView.render();
        MessagesView.render();
      });
    }
  },

  // Updates message list based on room selection
  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  }

};
