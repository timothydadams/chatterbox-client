var MessagesView = {

  $chats: $('#chats'),

  initialize: function(msgs) {
    // Build container for messages <div id="chats">???
    // get the messages
    // MessagesView.$chats.append(MessagesView.render(App.fetch.results));
  },

  render: function(messages) {
    // Generate the html wrapper for all the messages
    messages.forEach(message => {
      if (message.username && message.text) {
        MessagesView.$chats.append(MessageView.render(message));
      }
    });
  },

  renderMessage: function(message) { // append new message to the view
    MessagesView.$chats.prepend(MessageView.render(message));
  }



};