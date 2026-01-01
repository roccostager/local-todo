import userData from "./dataManager";

const changeDirectory = function(directory, domElement) {  // directory refers to data, unlike when called
    document.querySelectorAll('.directory-container').forEach((element) => {
        element.classList.remove('selected');
    });
    
    userData.changeDirectory(directory);
    domElement.classList.add('selected');
};

const bindTitleCreate = function(domNewNote) {
    domNewNote.querySelector('input[type="text"].h3').addEventListener('keyup', e => {
        console.log('event working');
        if (e.key == 'Enter') {
            let newData = userData.updateData.add('note', {title: 'temptitle'});
            userData.updateData.push(newData, userData.selectedDirectory.notes);
            console.log(userData);
        }
    });
};

const userActions = {changeDirectory, bindTitleCreate};
export default userActions;