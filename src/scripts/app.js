import { createDirectory } from "./renderer";
import userData from "./dataManager";

const createForm = document.getElementById('note-create-form');

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
});

createForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('popup-content').classList.remove('visible');

    const formData = new FormData(createForm);
    const name = formData.get('name');
    const description = formData.get('description');

    createDirectory(true, {name, description});
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    userData.darkMode = !userData.darkMode;
    userData.darkMode ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
});

userData.loadData();
for (let i = 0; i < userData.data.length; i++) {
    createDirectory(false, userData.data[i]);
}