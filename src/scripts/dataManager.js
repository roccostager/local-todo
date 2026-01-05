const dataStructures = (function() {
    const directory = (properties) => {
        return {
            name: properties['name'],
            description: properties['description'],
            notes: [],
        };
    };
    const note = (properties) => {
        return {
            title: properties['title'],
            checkboxes: [],
        };
    };
    const checkbox = (properties) => {
        return {
            text: properties['text'],
            checked: properties['checked'],
        };
    };
    return {directory, note, checkbox};
})();

const updateData = (function() {
    const add = (dataType, properties) => {
        let newData = dataStructures[dataType](properties);
        return newData;
    };
    const remove = () => {
        console.log('Removing Data!');
    };
    const push = (data, pushLocation) => {
        pushLocation.push(data);
        saveData();
    }
    return {add, remove, push};
})();

let userData = {
    data: [],
    selectedDirectory: undefined,
    darkMode: false,
    changeDirectory: function(newDirectory) {
        this.selectedDirectory = newDirectory;
    },
    loadData, saveData, updateData,
};

function loadData() {
    console.log('Loading Data!');

    const stored = localStorage.getItem('stored');
    if (stored) {
        const storedData = JSON.parse(stored);
        userData.data = storedData.data;
        userData.darkMode = storedData.darkMode;
    }
};

function saveData() {
    console.log('Saving Data!');

    let stored = {};
    stored.data = userData.data;
    stored.darkMode = userData.darkMode;

    localStorage.setItem('stored', JSON.stringify(stored));
};

export default userData;