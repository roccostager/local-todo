const components = {
    newNote: {
        tag: 'div',
        attributes: {},
        classList: ['new', 'note'],
        children: ['newNoteHeading', 'newNotespace'],
    },
    newNoteHeading: {
        tag: 'div',
        attributes: {},
        classList: ['new', 'h3', 'note-component'],
        children: ['newNoteHeadingInput', 'addButton'],
    },
    newNoteHeadingInput: {
        tag: 'input',
        attributes: {
            type: 'text',
            maxlength: '20',
            placeholder: 'new note category',
            name: 'name',
            autocomplete: 'off',
        },
        classList: ['h3'],
        children: [],
    },
    addButton: {
        tag: 'button',
        attributes: {
            innerText: '+',
        },
        classList: ['invis-button', 'squarify', 'p'],
        children: [],
    },
    newNotespace: {
        tag: 'div',
        attributes: {},
        classList: ['notespace'],
        children: ['newNoteComponent'],
    },
    newNoteComponent: {
        tag: 'div',
        attributes: {},
        classList: ['new', 'note-component'],
        children: ['disabledCheckbox', 'noteTextInput', 'addButton'],
    },
    disabledCheckbox: {
        tag: 'input',
        attributes: {
            type: 'checkbox',
            disabled: 'true',
        },
        classList: [],
        children: [],
    },
    noteTextInput: {
        tag: 'input',
        attributes: {
            type: 'text',
            maxlength: '20',
            placeholder: 'new note',
            name: 'note',
            autocomplete: 'off',
        },
        classList: ['p'],
        children: [],
    },

    directory: {
        tag: 'button',
        attributes: {},
        classList: ['directory-container'],
        children: ['directoryHeading', 'directoryDescription'],
    },
    directoryHeading: {
        tag: 'h4',
        attributes: {},
        classList: ['h4'],
        children: [],
    },
    directoryDescription: {
        tag: 'p',
        attributes: {},
        classList: [],
        children: [],
    },

    note: {
        tag: 'div',
        attributes: {},
        classList: ['note'],
        children: ['noteHeading', 'notespace'],
    },
    noteHeading: {
        tag: 'p',
        attributes: {},
        classList: ['h3'],
        children: [],
    },
    notespace: {
        tag: 'div',
        attributes: {},
        classList: ['new', 'note'],
        children: [],
    },
    noteComponent: {
        tag: 'div',
        attributes: {},
        classList: ['note-component'],
        children: ['checkbox', 'noteName', 'crossButton'],
    },
    checkbox: {
        tag: 'input',
        attributes: {
            type: 'checkbox',
        },
        classList: [],
        children: [],
    },
    noteName: {
        tag: 'p',
        attributes: {},
        classList: [],
        children: [],
    },
    crossButton: {
        tag: 'button',
        attributes: {
            innerHTML: '&times',
        },
        classList: ['invis-button', 'squarify', 'p', 'cross'],
        children: [],
    },
};

export default components;