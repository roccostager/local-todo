document.addEventListener('click', e => {
    const popupButton = document.getElementById('popup-button');
    const popupContent = document.getElementById('popup-content');
    const createForm = document.getElementById('note-create-form');

    switch (true) {
        case popupButton == e.target: {
            console.log('here');
            popupContent.classList.toggle('visible');
            createForm.reset();
            break
        }
        default: {
            if (!popupContent.contains(e.target) && popupContent.classList.contains('visible')) {
                console.log('at default');
                popupContent.classList.toggle('visible');
            }
        }
    }
})

let listeners = function() {
    return true;
}
export default listeners;