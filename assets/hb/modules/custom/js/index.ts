// This script will be compiled into the JS bundle automatically.

var message = "";

function validateEmail(email) {
    // Regular expression for email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


$("#sendMessage").on("click", function() {
    // Example usage:
    var email = $("#contact-email").val();
    if (validateEmail(email)) {
        message = `Name: ` +  $("#contact-name").val()  + `
                   Email: ` +  email  + `
                   Institution/Company: ` + $("#contact-institution_company").val() + `
                   Subject: ` +  $("#contact-subject").val()  + `
                   Message: ` +  $("#contact-message").val();

        $.ajax({
            url: "//formspree.io/f/mbjnqvnq", 
            method: "POST",
            data: {message: message},
            dataType: "json"
        });
          // Clear the value of each input and textarea field within the form
        $("#contact-name").val("");
        $("#contact-email").val("");
        $("#contact-institution_company").val("");
        $("#contact-subject").val("");
        $("#contact-message").val("");
        alert('Thanks for the email, we\'ll be in touch promptly.');
    } else {
        alert('Invalid email address.');
        
    }
    return false;
});