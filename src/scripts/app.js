import render from "./renderer";
import userData from "./dataManager";

const createForm = document.getElementById('note-create-form');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

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

    const formData = new FormData(createForm);
    const name = formData.get('name');
    const description = formData.get('description');

    content.innerHTML = '';

    const note = render('note');
    content.appendChild(note);

    const directory = render('directory');
    directory.querySelector('h4.h4').innerText = name;
    directory.querySelector('p').innerText = description;
    document.querySelector('.directories-container').appendChild(directory);

    let newData = userData.updateData.add('directory', {name, description});
    userData.updateData.push(newData, userData.data);
    console.log(userData);
})