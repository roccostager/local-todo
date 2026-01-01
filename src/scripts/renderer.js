import components from "./components";

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
    const note = render('newNote');
    content.appendChild(note);

    for (let i = 0; i < directory.notes.length; i++) {
        const note = directory.notes[i];  // Data
        
        const domNote = render('note');
        domNote.querySelector('p.h3').innerText = note.title;

        loadNoteSpaceContent(note, domNote);  // Checkboxes

        content.appendChild(domNote);
    }
};

const loadNoteSpaceContent = (note, domNote) => {
    for (let i = 0; i < note.checkboxes; i++) {
        const domCheckbox = render('noteComponent');
        domCheckbox.querySelector('.checkbox').checked = note[i].checked;
        domCheckbox.querySelector('p').innerText = note[i].text;
    }
    const newCheckbox = render('newNoteComponent');
    domNote.appendChild(newCheckbox);
}

export default render;