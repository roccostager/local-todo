import components from "./components";

const render = function(component, parentNode) {
    const docElement = document.createElement(components[component].tag);

    console.log(component);
    console.log(components[component]);

    for (const [key, value] of Object.entries(components[component].attributes)) {
        docElement[key] = value;
    }
    components[component].classList.forEach(element => {
        docElement.classList.add(element);
    });

    for (let i = 0; i < components[component].children.length; i++) {
        render(components[component].children[i], docElement);
    }

    parentNode.appendChild(docElement);
    return docElement;
}

export default render;