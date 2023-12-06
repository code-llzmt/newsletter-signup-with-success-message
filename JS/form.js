

const emailField = document.querySelector('.email-field');
const formButton = document.querySelector('.form > button');
const successButton = document.querySelector('.success-card > button');

const signupCard = document.querySelector('.signup-card');
const successCard = document.querySelector('.success-card');
const emailTextContent = document.querySelector('.email-text-content');

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const message = document.querySelector('.message');

formButton.addEventListener('click', () => {

    if(emailField.value.length == 0 || !emailField.value.match(regex)){

        // field red color
        emailField.style.color = 'var(--tomato)';
        emailField.style.backgroundColor = 'var(--error-lightTomato)';
        emailField.style.border = '1px solid var(--tomato)';

        // error message
        message.style.display = 'block';
    }else{

        // cards display
        signupCard.style.display = 'none';
        successCard.style.display = 'flex';

        // success-card email
        emailTextContent.textContent = emailField.value;
    }
});

successButton.addEventListener('click', () => {
    // cards display
    signupCard.style.display = 'flex';
    successCard.style.display = 'none';

    // clean the email input field
    emailField.value = '';
});