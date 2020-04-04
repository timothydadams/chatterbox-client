
/*
  Called by app.js

*/
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Event handler for rooms button click
    RoomsView.$button.on('click', Rooms.add);
    // Event handler for rooms dropdown select (change)
    RoomsView.$select.on('change', RoomsView.renderRoomMessages(event));
    RoomsView.buildSelect(); // Builds select list from messages on init
  },

  renderRoomMessages: function(event) {
    //filter all messages based of the target value of the passed in event when dropdown changes
    //$(event.eventTarget).val()
  },

  renderRoom: function(newRoom) {
    if (newRoom) {
      var room = Rooms.render(newRoom);
      RoomsView.$select.prepend(room);
    }
  },

  buildSelect: function(messages) {
    //var menuOptions = [];
    // Pluck the rooms from all messages
    var menuOptions = _.pluck(messages, 'roomname');
    // store unique rooms in new array
    menuOptions = _.uniq(menuOptions);
    menuOptions.sort();
    // Iterate over unique rooms to populate dropdown
    //console.log(menuOptions);

    menuOptions.forEach(item => {
      if (item) {
        RoomsView.$select.append(`<option>${item}</option>`);
      }
    });
  }



};
