$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	// $(form).submit(function(e) {
	$('.input-btn').click(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

var name = $('#name').val();	
var email = $('#email').val();	
var message = $('#message').val();

		// Submit the form using AJAX.
		$.ajax({
			type: 'GET',
			url: $(form).attr('action'),
			data: {name:name,email:email,message:message}
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
