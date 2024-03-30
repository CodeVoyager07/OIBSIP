document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            const formData = new FormData();
            formData.append('name', nameInput.value);
            formData.append('email', emailInput.value);
            formData.append('message', messageInput.value);

            // Replace 'your-api-endpoint' with your actual API endpoint
            fetch('your-api-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful form submission
                console.log('Form submitted successfully:', data);
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            })
            .catch(error => {
                // Handle errors
                console.error('Error submitting form:', error);
                alert('There was an error submitting your form. Please try again later.');
            });
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Please enter your name.');
        } else {
            hideError(nameInput);
        }

        if (emailInput.value.trim() === '') {
            isValid = false;
            showError(emailInput, 'Please enter your email.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email address.');
        } else {
            hideError(emailInput);
        }

        if (messageInput.value.trim() === '') {
            isValid = false;
            showError(messageInput, 'Please enter your message.');
        } else {
            hideError(messageInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
    }

    function hideError(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = '';
        errorDiv.style.display = 'none';
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
