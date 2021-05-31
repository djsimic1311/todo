let listElements = document.querySelectorAll('li');
console.log(listElements)

listElements.forEach(element => {
    element.addEventListener('click', (event) => {
        if (element.style.textDecoration == 'line-through') {
            element.setAttribute('style', 'text-decoration: none');
        } else {
            element.setAttribute('style', 'text-decoration: line-through');
        }
        event.preventDefault;
    });
})