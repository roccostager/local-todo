import components from "./components";

const render = function(component) {
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
        const childElement = render(components[component].children[i], docElement);
        docElement.appendChild(childElement);
    }
    
    return docElement;
}

export default render;