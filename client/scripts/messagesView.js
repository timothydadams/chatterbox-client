var MessagesView = {

  $chats: $('#chats'),

  initialize: function(msgs) {
    // Build container for messages <div id="chats">???
    // get the messages
    // MessagesView.$chats.append(MessagesView.render(App.fetch.results));
  },

  render: function() {
    MessagesView.$chats.html('');
    //gets items from Messages object and chains
    Messages
      .items()
      // .filter(Room.isSelected(message))
      .each(message => {
        MessagesView.renderMessage(message);
      });
  },

  renderMessage: function(message) { // append new message to the view
    MessagesView.$chats.prepend(MessageView.render(message));
  }

};

// ------------------
//   render: function () {

//       MessagesView.$chats.html('');
//       Messages
//         .items()
//         .filter(message => Rooms.isSelected(message.roomname))
//         .each(message => MessagesView.renderMessage(message));
//     },

//     renderMessage: function (message) {
//       var $message = MessageView.render(message);
//       MessagesView.$chats.prepend($message);
//     },