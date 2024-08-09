// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
// Select the submit button and the contact form container
const submitButton = document.querySelector('#submit-button');
const contactFormContainer = document.querySelector('.contact');

// Ensure elements are properly selected
if (submitButton && contactFormContainer) {
    // Add an event listener to the submit button to handle the click event
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Create a new paragraph element
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message!';

        // Set the font size to 24px
        thankYouMessage.style.fontSize = '24px';

        // Replace the contents of the contact form container with the thank you message
        contactFormContainer.innerHTML = '';
        contactFormContainer.appendChild(thankYouMessage);
    });
}