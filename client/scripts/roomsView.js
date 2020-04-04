
/*
  Called by app.js

*/
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Event handler for rooms button click
    RoomsView.$button.on('click', RoomsView.render(event));
    // Event handler for rooms dropdown select (change)
    RoomsView.$select.on('change', RoomsView.render(event));
    RoomsView.buildSelect(); //?????
  },

  render: function(event) {
    //$(event.eventTarget).val()
  },

  buildSelect: function(messages) {
    //var menuOptions = [];
    // Pluck the rooms from all messages
    var menuOptions = _.pluck(messages, 'roomname');
    // store unique rooms in new array
    menuOptions = _.uniq(menuOptions);
    menuOptions.sort();
    menuOptions.unshift('New Room');
    // Iterate over unique rooms to populate dropdown
    //console.log(menuOptions);

    menuOptions.forEach(item => {
      if (item) {
        RoomsView.$select.append(`<option>${item}</option>`);
      }
    });
  }



};
