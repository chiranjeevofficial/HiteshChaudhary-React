function customRender(element, container) {
    /*const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);
    container.appendChild(domElement);*/
    const domElement = document.createElement(element.type);
    domElement = ocument.innerHTML = element.children;
    for (const prop in props) {
        
    }
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.co.in',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);