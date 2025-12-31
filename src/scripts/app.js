import render from "./renderer";

const createForm = document.getElementById('note-create-form');
const content = document.querySelector('.content')

document.addEventListener('click', e => {
    const popupButton = document.getElementById('popup-button');
    const popupContent = document.getElementById('popup-content');

    switch (true) {
        case popupButton == e.target: {
            popupContent.classList.toggle('visible');
            createForm.reset();
            break
        }
        default: {
            if (!popupContent.contains(e.target) && popupContent.classList.contains('visible')) {
                console.log('at default');
                popupContent.classList.toggle('visible');
            }
        }
    }
})

createForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('popup-content').classList.remove('visible');

    content.innerHTML = '';

    const note = render('note');
    content.appendChild(note);
})