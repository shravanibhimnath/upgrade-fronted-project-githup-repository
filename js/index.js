function openSignupModal() {
    let overlay = document.getElementById('signup-overlay');
    let modal = document.getElementById('SignUpModal');

    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function closeSignupModal() {
    let overlay = document.getElementById('signup-overlay');
    let modal = document.getElementById('SignUpModal');

    overlay.style.display = 'none';
    modal.style.display = 'none';
}

function submitForm() {
    
    closeSignupModal();
}

document.querySelector('.header-btn.signup').addEventListener('click', openSignupModal);



function openSigninModal() {
    let overlay = document.getElementById('signin-overlay');
    let modal = document.getElementById('SignInModal');

    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function closeSigninModal() {
    let overlay = document.getElementById('signin-overlay');
    let modal = document.getElementById('SignInModal');

    overlay.style.display = 'none';
    modal.style.display = 'none';
}
function submitForm() {
    // TODO: Add your form submission logic here

    // After form submission, close the modal
    closeSigninModal();
}
document.querySelector('.header-btn.signin').addEventListener('click', openSigninModal);


//    All post function
function openAllpostsModal() {
    let overlay = document.getElementById('allposts-overlay');
    let modal = document.getElementById('AllPostsModal');

    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function closeAllpostsModal() {
    let overlay = document.getElementById('allposts-overlay');
    let modal = document.getElementById('AllPostsModal');

    overlay.style.display = 'none';
    modal.style.display = 'none';
}

function submitForm() {
    
    closeAllpostsModal();
}

document.querySelector('.header-btn.allpost').addEventListener('click', openAllpostsModal);





