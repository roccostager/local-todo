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

    const note = render('newNote');
    content.appendChild(note);
    userActions.bindTitleCreate(note);

    for (let i = 0; i < directory.notes.length; i++) {
        const note = directory.notes[i];  // Data
        
        const domNote = render('note');
        domNote.querySelector('p.h3').innerText = note.title;

        const newCheckbox = render('enabledNewNoteComponent');
        domNote.appendChild(newCheckbox);
        userActions.bindNoteCreate(newCheckbox, note);

        loadNoteSpaceContent(note, domNote.querySelector('.notespace'));  // Checkboxes

        content.appendChild(domNote);
    }
    
    function loadNoteSpaceContent(note, domNote) {
        for (let i = 0; i < note.checkboxes.length; i++) {
            console.log('im rendering');
            const domCheckbox = render('noteComponent');
            domCheckbox.querySelector('input[type="checkbox"]').checked = note.checkboxes[i].checked;
            domCheckbox.querySelector('p').innerText = note.checkboxes[i].text;
            domNote.appendChild(domCheckbox);
        }
    }
};

export default render;