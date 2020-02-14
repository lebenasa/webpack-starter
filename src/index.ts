import './index.html'
import './style.sass'

function component(): HTMLElement {
    const element = document.createElement('h1')
    element.innerHTML = 'Hello world!!'
    return element
}

document.body.appendChild(component())
