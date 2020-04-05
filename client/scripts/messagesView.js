var MessagesView = {

  $chats: $('#chats'),

  initialize: function(msgs) {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    MessagesView.$chats.html('');
    //gets items from Messages object and chains
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  //renders individual messages
  renderMessage: function(message) { // append new message to the view
    MessagesView.$chats.prepend(MessageView.render(message));
  },

  // Processes the username click to add user to friends list
  handleClick: function(event) {
    var username = $(event.currentTarget).data('username');

    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};