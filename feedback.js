document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const message = this.message.value;

  if (name && message) {
    alert(`Thank you for your feedback, ${name}!`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
