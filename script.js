 // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name && email && message) {
      alert(Thanks, ${name}! Your message has been sent.);
      form.reset(); // Clear form after submission
    } else {
      alert("Please fill in all fields.");
    }
  });
});
