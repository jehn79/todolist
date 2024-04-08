//global variables
let toDo = [];
let question1;
let question2;

//add item to list
function addToArray() {
    question1 = prompt("Add item to to-do list");
    toDo.push(question1);
    if(question1 === 'x') {
        toDo.pop();
    }
    alert(`The contents of your array are: ${toDo}`);
}


//remove item from list
function removeFromArray() {
    question2 = prompt("What item have you completed? If none, type 'none'.");
    for (let i = 0; i < toDo.length; i++) {
        if(question2 === toDo[i]){
            let location = toDo.indexOf(toDo[i]);
            toDo.splice(location,1);
    
        alert(`You've removed the to-do list item: ${question2}. The updated to-do list: ${toDo}`);
        }
}

}

//loop to prompt user to ADD to-do item or end prompt
do{
    addToArray();
}while(question1 !== 'x');


//loop to prompt user to REMOVE to-do item or end prompt
do{
    removeFromArray();
}while(question2 !== 'none');

