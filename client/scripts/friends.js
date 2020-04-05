var Friends = {
  friendsList: {
    max: true,
    marcus: false
  },
  toggleStatus: function(event) {
    //$(event.eventTarget).text();

  },

  statusCheck: function(username) {
    return Friends.friendsList.hasOwnProperty(username);
  }

};