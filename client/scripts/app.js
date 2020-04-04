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

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => { //where we need to sanitize

      // examine the response from the server request:
      console.log(data);
      // for (var i = 0; i <data.results.length; i++) {
      MessagesView.render(data['results']);
      //     data.results[i].text = JSON.stringify(data.results[i].text);
      // }
      //return data;
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
