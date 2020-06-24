var last_active = null;
function border(btn){

    if(last_active == null){
        last_active = btn;
    }

    if(last_active == btn){
        btn.className = "border_bottom";
    } else {
        last_active.classList.remove("border_bottom");
        btn.className = "border_bottom";
        last_active = btn;
    }
}

const addButton= document.querySelector('.addButton');
var inputValue= document.querySelector('input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let editButton=document.createElement('button');
        editButton.innerHTML="Edit";
        editButton.classList.add('editButton');

        let removeButton=document.createElement('button');
        removeButton.innerHTML="Remove";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
        input.style.border="1px solid lightgray";
        if(input.disabled == false)input.style.border="1px solid lightgray";
        else input.style.border=0;
    }
    remove(item){
        container.removeChild(item);

    }


}

function add(){
    if(inputValue.value !=""){
        new item(inputValue.value);
        inputValue.value= "";
    }
}
addButton.addEventListener('click', add);


var index = 0;
function toogleNavbar(){
    if(index == 0){
        document.getElementById("nav_menu").style.display = "block";
        index = 1;
    } else {
        document.getElementById("nav_menu").style.display="none";
        index = 0;
    }
}