import components from "./components";
import userActions from "./userActions";
import userData from "./dataManager";

const content = document.querySelector('.content');
const directoriesContainer = document.querySelector('.directories-container');

const render = function(component) {
    const docElement = document.createElement(components[component].tag);

    for (const [key, value] of Object.entries(components[component].attributes)) {
        docElement[key] = value;
    }
    components[component].classList.forEach(element => {
        docElement.classList.add(element);
    });

    for (let i = 0; i < components[component].children.length; i++) {
        const childElement = render(components[component].children[i], docElement);
        docElement.appendChild(childElement);
    }
    
    return docElement;
}

export const loadDirectoryContent = (directory) => {
    content.innerHTML = '';

    const domNewNote = render('newNote');
    content.appendChild(domNewNote);
    userActions.bindTitleCreate(domNewNote);

    domNewNote.addEventListener('newNoteCreation', out => {
        loadNoteContent(out.detail, directory);
    });

    for (let i = 0; i < directory.notes.length; i++) {
        loadNoteContent(directory.notes[i], directory);
    }

    function loadNoteContent(note, directory) {
        let domNote = render('note');
        domNote.querySelector('p.h3').innerText = note.title;

        const crossButton = domNote.querySelector('button.cross');
        crossButton.addEventListener('click', function() {
            const dataIndex = directory.notes.indexOf(note);
            directory.notes.splice(dataIndex, 1);  // Remove data from userData

            domNote.remove();
            userData.saveData();
        });

        const newCheckbox = render('enabledNewNoteComponent');
        domNote.appendChild(newCheckbox);
        userActions.bindNoteCreate(newCheckbox, note);

        newCheckbox.addEventListener('newCheckboxCreation', out => {
            loadNoteSpaceContent(out.detail, domNote.querySelector('.notespace'), note);
        });

        for (let i = 0; i < note.checkboxes.length; i++) {
            loadNoteSpaceContent(note.checkboxes[i], domNote.querySelector('.notespace'), note);  // Checkboxes
        }

        content.appendChild(domNote);
        newCheckbox.querySelector('input[type="text"].p').focus();
    }
    
    function loadNoteSpaceContent(checkbox, domNote, note) {
        let domCheckbox = render('noteComponent');
        const checkboxField = domCheckbox.querySelector('input[type="checkbox"]');

        checkboxField.checked = checkbox.checked;
        domCheckbox.querySelector('p').innerText = checkbox.text;
        domNote.appendChild(domCheckbox);

        checkboxField.addEventListener('change', e => {
            checkbox.checked = checkboxField.checked;
            userData.saveData();
        });

        const crossButton = domCheckbox.querySelector('button.cross');
        crossButton.addEventListener('click', function() {
            const dataIndex = note.checkboxes.indexOf(checkbox);
            note.checkboxes.splice(dataIndex, 1);  // Remove data from userData

            domCheckbox.remove();
            userData.saveData();
        });
    }
};

export const createDirectory = (create, dataObj) => {
    const directory = render('directory');
    directory.querySelector('h4.h4').innerText = dataObj.name;
    directory.querySelector('p').innerText = dataObj.description;
    directoriesContainer.appendChild(directory);

    let dirData = dataObj;
    if (create) {    
        dirData = userData.updateData.add('directory', dataObj);
        userData.updateData.push(dirData, userData.data);
        userActions.changeDirectory(dirData, directory);
        loadDirectoryContent(dirData);
    }

    directory.addEventListener('click', e => {
        if (e.target == directory.querySelector('.directory-header button.cross')) {
            const dataIndex = userData.data.indexOf(dirData);
            userData.data.splice(dataIndex, 1);  // Remove data from userData

            directory.remove();
            content.innerHTML = '';
            userData.saveData();
        } else {
            userActions.changeDirectory(dirData, directory);
            loadDirectoryContent(dirData);
        }
    });
}

export default render;