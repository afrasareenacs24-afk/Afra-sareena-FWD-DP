// Fake form submission demo

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  document.getElementById("formResponse").innerText = "✅ Thank you! Your message has been sent.";

  this.reset();

});