import userData from "./dataManager";

const changeDirectory = function(directory, domElement) {  // directory refers to data, unlike when called
    document.querySelectorAll('.directory-container').forEach((element) => {
        element.classList.remove('selected');
    });
    
    userData.changeDirectory(directory);
    domElement.classList.add('selected');
};

const bindTitleCreate = function(domNewNote) {
    const inputField = domNewNote.querySelector('input[type="text"].h3');
    inputField.addEventListener('keyup', e => {
        if (e.key == 'Enter') {
            let newData = userData.updateData.add('note', {title: inputField.value});
            userData.updateData.push(newData, userData.selectedDirectory.notes);
            inputField.value = '';

            const actionEvent = new CustomEvent('newNoteCreation', {detail: newData});
            domNewNote.dispatchEvent(actionEvent);
        }
    });
};

const bindNoteCreate = function(newCheckbox, note) {
    const inputField = newCheckbox.querySelector('input[type="text"].p');
    inputField.addEventListener('keyup', e => {
        if (e.key == 'Enter') {
            let newData = userData.updateData.add('checkbox', {text: inputField.value, checked: false});
            userData.updateData.push(newData, note.checkboxes); // Referes to data
            inputField.value = '';
            
            const actionEvent = new CustomEvent('newCheckboxCreation', {detail: newData});
            newCheckbox.dispatchEvent(actionEvent);
        }
    });
}

const userActions = {changeDirectory, bindTitleCreate, bindNoteCreate};
export default userActions;