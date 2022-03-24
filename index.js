let lastId = 0;


// event handlers

function handleCreateNewTaskItem( e ) {
    let userInput = prompt("What would you like to add to the list?")
    if ( !userInput ) {
        return
    }    

    lastId++;

    let li = document.createElement('li');
    li.id = lastId;

    li.classList.add('list-group-item');
    li.innerHTML = `<div class="li-div-ct" ><input class="checkbox form-check-input" type="checkbox" /><button type="button" class="remove-item-btn btn btn-outline-danger btn-sm">-</button><span>${userInput}</span></div>`

    document.querySelector('#task-list').appendChild(li);
}

// do this second
function handleRemoveCompleted( e ) {

    let lis = document.querySelectorAll('li');
    
    lis.forEach(el => {
        if (el.classList.contains('completed')) {
            el.remove();
        }
    });
}

// do this first
function handleClickOnUl( e ) {

    let li = e.target.closest('li');

    if (e.target.type === "button") {
        li.remove();
    }

    if (e.target.type === "checkbox") {
        let span = li.querySelector('span');
        span.classList.toggle('completed-text');
        li.classList.add('completed')
    }
}



// readyDOM
function readyDOM() {

    // come back to complete
    document.querySelector('#create-task-item-btn').addEventListener('click', handleCreateNewTaskItem);
    document.querySelector('#remove-task-item-btn').addEventListener('click',handleRemoveCompleted);
    document.querySelector('#task-list').addEventListener('click', handleClickOnUl);

}

readyDOM();

