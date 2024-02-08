document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('error');
  
    if (password !== confirmPassword) {
      errorElement.style.display = 'block'; // Display error message
      document.getElementById('password').classList.add('invalid'); // Highlight password field
      document.getElementById('confirmPassword').classList.add('invalid'); // Highlight confirm password field
    } else {
      errorElement.style.display = 'none'; // Hide error message
      document.getElementById('password').classList.remove('invalid'); // Remove highlight from password field
      document.getElementById('confirmPassword').classList.remove('invalid'); // Remove highlight from confirm password field
      // Form submission logic here (e.g., submit the form)
    }
  });