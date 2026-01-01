import userData from "./dataManager";

const changeDirectory = function(directory, domElement) {  // directory refers to data, unlike when called
    document.querySelectorAll('.directory-container').forEach((element) => {
        element.classList.remove('selected');
    });
    
    userData.changeDirectory(directory);
    domElement.classList.add('selected');
}

const userActions = {changeDirectory};
export default userActions;