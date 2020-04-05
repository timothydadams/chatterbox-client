/*
  Called by app.js.

*/
var FormView = {

  $form: $('form'),

  initialize: function() { // Adds event listener for form submission
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) { // Submits the form
    // Stop the browser from submitting the form
    event.preventDefault();
    //build the message and POST to server via Parse
    var message = {
      username: App.username, // from the browser window
      text: FormView.$form.find('#message').val(),
      roomname: RoomsView.$select.val()
    };
    //submit message to server and store return info on the message object for missing properties
    Parse.create(message, (data) => {
      _.extend(message, data); //fills in the missing properties on submit
      Messages.add(message, MessagesView.renderMessage);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};