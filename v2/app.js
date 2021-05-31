let newTask = document.getElementById('task')
let list = document.querySelector('ul');
let submitButton = document.getElementById('submit');
let listElements = document.querySelectorAll('li');
let option = document.querySelectorAll('input[name = "option"]');


submitButton.addEventListener('click', (event) => {
    if (newTask.value != '') {
        let task = document.createElement('li');
        task.classList.add('listItem');
        task.innerHTML = newTask.value;
        if (option[0].checked) {
            list.prepend(task);
        }
        else if (option[1].checked){
            list.appendChild(task)
        }
        event.preventDefault();
        newTask.value = '';
        task.addEventListener('click', (event) => {
            list.removeChild(task)
            event.preventDefault();
        });
    }
})

listElements.forEach(element => {
    element.addEventListener('click', (event) => {
        list.removeChild(element);
        event.preventDefault();
    });
})

