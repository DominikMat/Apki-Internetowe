
const submitButton = document.getElementById('contactButton');


function resetButton() {
    submitButton.innerText = "Send Message";
    submitButton.classList.toggle('active', false);
}
function onContactFromSent(event) {
    submitButton.innerText = "Message Sent!";
    submitButton.classList.toggle('active', true);
    event.preventDefault();
    setTimeout("resetButton()",8000);
}