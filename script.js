display_1 = document.querySelector('.display-1');
display_2 = document.querySelector('.display-2');
display_3 = document.querySelector('.display-3');
container = document.querySelector('.container-2')
container_3 = document.querySelector('.container-3')
box = document.querySelector('.box-1')
box_3 = document.querySelector('.box-3')

function searchFunction() {
    box.style.visibility = 'visible'
    container.style.width = '300px'
    display_2.style.visibility = 'visible'
    display_2.addEventListener('click',() =>{
        display_2.style.visibility = 'hidden'
        container.style.width = '0px'
        box.style.visibility = 'hidden'
    })
}

function hideFunction() {
    container.style.width = '0px'
    display_2.style.visibility = 'hidden'
}

function runFunction() {
    box_3.style.visibility = 'visible'
    container_3.style.width = '300px'
    display_3.style.visibility = 'visible'
    display_3.addEventListener('click',() =>{
        display_3.style.visibility = 'hidden'
        container_3.style.width = '0px'
        box_3.style.visibility = 'hidden'
    }) 
}
