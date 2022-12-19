// const
const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

// Eventlistener
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeOutside);
form.addEventListener('submit', submitForm);

// open Modal
function openModal() {
  console.log('In openModal');
  modal.style.display = 'flex';
}

// close Modal
function closeModal() {
  console.log('In closeModal');
  modal.classList.add('close-modal-animation');

  setTimeout(() => {
    modal.style.display = 'none';
    window.location.reload();     // The reload() method does the same as the reload button in my browser
  }, 300)
}

// close Outside
function closeOutside(e) {
  console.log('In closeOutside');

  if (e.target.classList.contains('modal')) {
    closeModal();
  }
}

// Thank you message after subscription
function submitForm(e) {
  const card = document.querySelector('.card');

  // card.classList.add('thanks-banner')
  // card.className = 'thanks-banner';
  card.innerHTML = '<h1>You made it Bro^^</h1>';
  // console.log(card);

  setTimeout(() => {
    closeModal();
  }, 6000)
}
















