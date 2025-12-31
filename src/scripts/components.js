const components = {
    'note': {
        tag: 'div',
        attributes: {},
        classList: ['note'],
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
};

export default components;