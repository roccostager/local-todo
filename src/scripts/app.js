import render, { loadDirectoryContent } from "./renderer";
import userData from "./dataManager";
import userActions from "./userActions";

const createForm = document.getElementById('note-create-form');
const directoriesContainer = document.querySelector('.directories-container');
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
});

createForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('popup-content').classList.remove('visible');

    const formData = new FormData(createForm);
    const name = formData.get('name');
    const description = formData.get('description');

    const directory = render('directory');
    directory.querySelector('h4.h4').innerText = name;
    directory.querySelector('p').innerText = description;
    directoriesContainer.appendChild(directory);

    let newData = userData.updateData.add('directory', {name, description});
    userData.updateData.push(newData, userData.data);
    userActions.changeDirectory(newData, directory);
    loadDirectoryContent(newData);

    directory.addEventListener('click', e => {
        if (e.target == directory.querySelector('.directory-header button.cross')) {
            const dataIndex = userData.data.indexOf(newData);
            userData.data.splice(dataIndex, 1);  // Remove data from userData

            directory.remove();
            content.innerHTML = '';
        } else {
            userActions.changeDirectory(newData, directory);
            loadDirectoryContent(newData);
        }
    });
});