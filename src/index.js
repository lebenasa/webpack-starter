import './index.html';
import './style.sass';

function component() {
    const element = document.createElement("h1");
    element.innerText = "Hello world";
    return element;
}

document.body.appendChild(component());
