const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
    
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  };
  const formData = {
    email: emailValue,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
});
