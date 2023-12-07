function newItem(){

    //jQuery
    //1. Adding a new item to the list of items

    let li= $('<li></li>');
    let inputValue= $('#input').val();
    let text= 
    li.append(inputValue);

    if (inputValue === '') {
        alert ('You must write something');
    } else {
        let list= $('#list');
        list.append(li);
    }

    //2. Crossing out an item from the list of items

    li.on("dblclick", function () {
        li.toggleClass("strike");
    }); 

    //3. Adding the delete button

    let deleteButton= $('<button></button>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    deleteButton.on("click", function () {
        li.addClass("delete");
    });

    //4. Reording the items
    $('#list').sortable();

}