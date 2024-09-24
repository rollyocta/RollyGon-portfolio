/////////////////////////////////////////////////// Skills Bars

$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
    });

/////////////////////////////////////////////////// start contact js

// Function to validate email format
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendMessage() {
  // Display loading indicator
  var loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.style.display = "block";

  // Initialize EmailJS
  (function() {
    emailjs.init("Spyr_MH9nLqvyY8iF"); // Account public key
  })();

  // Check if all required fields are filled
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !subject || !message) {
    // Hide loading indicator
    loadingIndicator.style.display = "none";
    
    // Show warning message for required fields
    document.getElementById("requiredFieldsWarning").style.display = "block";
    return;
  } else {
    // Hide warning message for required fields
    document.getElementById("requiredFieldsWarning").style.display = "none";
  }

  // Check if email format is valid
  if (!validateEmail(email)) {
    // Hide loading indicator
    loadingIndicator.style.display = "none";

    // Show warning message for invalid email format
    document.getElementById("emailWarning").style.display = "block";
    return;
  } else {
    // Hide warning message for invalid email format
    document.getElementById("emailWarning").style.display = "none";
  }

  var serviceID = "service_8t4jf2h"; // Email service ID
  var templateID = "template_67j6vsm"; // Email Template ID

  var params = {
    sendername: name,
    senderemail: email,
    subject: subject,
    message: message
  };

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Hide loading indicator
      loadingIndicator.style.display = "none";

      // Show success message
      alert('Thank you, ' + params['sendername'] + '! Your message has been sent.');

      // Clear input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    })
    .catch(error => {
      // Hide loading indicator
      loadingIndicator.style.display = "none";

      // Show error message
      console.error('Error sending email:', error);
      alert('An error occurred while sending your message. Please try again later.');
    });
}
