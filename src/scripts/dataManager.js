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

const loadData = function() {
    console.log('Loading Data!');
};

const saveData = function() {
    console.log('Saving Data!');
};

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
    }
    return {add, remove, push};
})();

let userData = {
    data: [],
    selectedDirectory: undefined,
    changeDirectory: function(newDirectory) {
        this.selectedDirectory = newDirectory;
    },
    loadData, saveData, updateData,
};
export default userData;