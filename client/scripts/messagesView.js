var MessagesView = {

  $chats: $('#chats'),

  initialize: function(msgs) {
    // Build container for messages <div id="chats">???
    // get the messages
    // MessagesView.$chats.append(MessagesView.render(App.fetch.results));
  },

  renderMessage: function(messages) {
    // Generate the html wrapper for all the messages
    messages.forEach(message => {
      if (message.username && message.text) {
        MessagesView.$chats.append(MessageView.render(message));
      }
    });
  },



};