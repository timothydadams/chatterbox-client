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
    //build the POST (Parse.create ?)
    var newMsg = {
      username: App.username, //from the browser window?
      text: $('#message').val(), //jquery for selecting text in input field
      roomname: RoomsView.$select.val()
    };
    //POST message to server
    Parse.create(newMsg, Parse.create.success);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};