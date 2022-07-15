
const refs = {
    openModal: document.querySelectorAll('[data-modal="open-modal"]'),
    closeModal: document.querySelector('.close-modal'),
    modal: document.querySelector('.modal'),
    modalOverlay: document.querySelector('.modal__overlay'),
}

console.log(refs.openModal);

export default function modalInit() {
    refs.closeModal.removeEventListener('click', closeByBtn);
    window.removeEventListener('keydown', closeByEsc);
    refs.openModal.forEach(item => {
        item.addEventListener('click', openModal)
    });
    refs.closeModal.addEventListener('click', closeByBtn);
    refs.modalOverlay.addEventListener('click', closeByOverlay);
    window.addEventListener('keydown', closeByEsc);
}


function openModal(e) {
   e.preventDefault();
    refs.modal.classList.add('is-visually');
    refs.modalOverlay.classList.add('is-visually');
    
    }


function closeByBtn(e) {
    e.preventDefault();
    refs.modal.classList.remove('is-visually');
    refs.modalOverlay.classList.remove('is-visually'); 
}

function closeByOverlay(e) {
    e.preventDefault();
  if (e.target === refs.modalOverlay) {
    refs.modal.classList.remove('is-visually');
    refs.modalOverlay.classList.remove('is-visually');
  }
}

function closeByEsc(e) {
    e.preventDefault();
    if (e.keyCode === 27) {
        refs.modal.classList.remove('is-visually');
        refs.modalOverlay.classList.remove('is-visually');
    }
}