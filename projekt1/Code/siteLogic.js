

/* CONTACT FORM */
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

/* PAGE SCROLLING */
const container = document.getElementById('scroll-container');
const leftButton = document.getElementById('leftButton');
const homeButton = document.getElementById('homeButton');
const rightButton = document.getElementById('rightButton');

function selectPage(pageIx) {
    const offset = (pageIx + 1) * -50; // Move based on index (50vw for each section)
    container.style.transform = `translateX(${offset}vw)`;

    // Hide/show buttons based on selected page
    leftButton.style.visibility = pageIx === -1 ? 'hidden' : 'visible';
    homeButton.style.visibility = pageIx === 0 ? 'hidden' : 'visible';
    rightButton.style.visibility = pageIx === 1 ? 'hidden' : 'visible';
}