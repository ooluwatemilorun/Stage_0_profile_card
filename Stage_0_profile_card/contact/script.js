document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    
    document.querySelectorAll(".error").forEach((el) => (el.hidden = true));
    document.querySelector(
      '[data-testid="test-contact-success"]'
    ).hidden = true;

    if (!name.value.trim()) {
      document.getElementById("test-contact-error-name").hidden = false;
      valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("test-contact-error-email").hidden = false;
      valid = false;
    }
    if (!subject.value.trim()) {
      document.getElementById("test-contact-error-subject").hidden = false;
      valid = false;
    }
    if (message.value.trim().length < 10) {
      document.getElementById("test-contact-error-message").hidden = false;
      valid = false;
    }

    if (valid) {
      document.querySelector(
        '[data-testid="test-contact-success"]'
      ).hidden = false;
      this.reset();
    }
  });
