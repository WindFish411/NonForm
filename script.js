



document.getElementById('duckForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone')
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('error');
  
    if (password !== confirmPassword) {
      errorElement.style.display = 'block'; 
      document.getElementById('password').classList.add('invalid'); 
      document.getElementById('confirmPassword').classList.add('invalid'); 
    } else {
      errorElement.style.display = 'none'; 
      document.getElementById('password').classList.remove('invalid'); 
      document.getElementById('confirmPassword').classList.remove('invalid'); 
    }

    

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
      };
  
  });
