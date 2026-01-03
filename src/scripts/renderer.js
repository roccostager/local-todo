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
        console.log(out);
        loadNoteContent(out.detail);
    });

    for (let i = 0; i < directory.notes.length; i++) {
        loadNoteContent(directory.notes[i]);
    }

    function loadNoteContent(note) {
        const domNote = render('note');
        domNote.querySelector('p.h3').innerText = note.title;

        const newCheckbox = render('enabledNewNoteComponent');
        domNote.appendChild(newCheckbox);
        userActions.bindNoteCreate(newCheckbox, note);
        console.log('we are here!');

        newCheckbox.addEventListener('newCheckboxCreation', out => {
            loadNoteSpaceContent(out.detail, domNote.querySelector('.notespace'));
        });

        for (let i = 0; i < note.checkboxes.length; i++) {
            loadNoteSpaceContent(note.checkboxes[i], domNote.querySelector('.notespace'));  // Checkboxes
        }

        content.appendChild(domNote);
        newCheckbox.querySelector('input[type="text"].p').focus();
    }
    
    function loadNoteSpaceContent(checkbox, domNote) {
        const domCheckbox = render('noteComponent');
        const checkboxField = domCheckbox.querySelector('input[type="checkbox"]');

        checkboxField.checked = checkbox.checked;
        domCheckbox.querySelector('p').innerText = checkbox.text;
        domNote.appendChild(domCheckbox);

        checkboxField.addEventListener('change', e => {
            checkbox.checked = checkboxField.checked;
        });
    }
};

export default render;