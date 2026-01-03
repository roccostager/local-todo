import components from "./components";
import userActions from "./userActions";

const content = document.querySelector('.content');

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
        });

        const crossButton = domCheckbox.querySelector('button.cross');
        crossButton.addEventListener('click', function() {
            const dataIndex = note.checkboxes.indexOf(checkbox);
            note.checkboxes.splice(dataIndex, 1);  // Remove data from userData

            domCheckbox.remove();
        });
    }
};

export default render;