/* This seems like it's performing the actions of the Model.
    It is basically instantiating the App.
   Calls
      -formView.js
      -roomsView.js
      -messagesView.js -
      -parse.js  - to get data from the database

*/
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(App.fetch, 3000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => { //where we need to sanitize
      // examine the response from the server request:
      console.log(data);
      //assign Messages to data.results (abstracting results in Messages object)
      //Messages.update(data.results, MessagesView.render)
      Rooms.update(data.results, RoomsView.render);
      Messages.update(data.results, MessagesView.render);
      // MessagesView.render();
      // MessagesView.render(data['results']);

      //RoomsView.buildSelect(data['results']);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
