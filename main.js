const container = document.querySelector('.container') ;
console.log(container);
const input = document.querySelector('input') ; 
console.log(input);
const button = document.querySelector('button') ; 
console.log(button);

const ul = document.createElement('ul') ; 
ul.classList = "list-unstyled col-10 text-center" ; 
ul.style.margin = "20px auto 0px" ; 

function addTodo(){
    const li = document.createElement('li') ; 
    li.innerHTML = input.value ; 
    li.style.marginBottom = "10px" ;
    li.style.backgroundColor = "#6b9393" ;  
    li.style.color = "white" ;
    li.style.border = "2px solid black" ;
    
    const remove = document.createElement('button') ; 
    remove.classList = "btn-dark" ; 
    remove.innerHTML = "X" ; 
    remove.style.border = "none" ; 
    remove.style.backgroundColor = "#6b9393" ;
    remove.style.float = "right" ; 
    remove.style.color = "white" ; 
    remove.style.display = "block" ; 
    remove.style.height = "23px" ;  

    li.appendChild(remove) ; 
    ul.appendChild(li) ; 
    container.appendChild(ul) ; 
    input.value = "" ; 

    
    remove.addEventListener('click',function(){
        li.remove() ; 
    });


    li.addEventListener('click' , function(){
        if(!li.classList.contains('completed')){
            li.classList.add('completed') ; 
            li.style.backgroundColor = "green" ;
            remove.style.backgroundColor = "green" ; 
        }else{
            li.classList.remove('completed') ; 
            li.style.backgroundColor = "#6b9393" ;
            remove.style.backgroundColor = "#6b9393" ; 
        }
    });
}

input.addEventListener('keyup' , function(event){
    if(event.key=="Enter"){
        if(input.value!=""){
            addTodo() ; 
        }
    }
});

button.addEventListener('click' , function(){
    if(input.value!=""){
        addTodo() ; 
    }
});