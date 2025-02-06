import style from './style.css'
import { format } from "date-fns";
import createProject from './dom';



// project add 

const addProjectBtn = document.querySelector('.add-project');
const getInputProject = document.querySelector('.get-input-project');
const addProjectNameBtn = document.querySelector('.add-project-btn')
const cancelProjectNameBtn = document.querySelector('.cancel-project-btn')

addProjectBtn.addEventListener('click',()=>{
    addProjectBtn.classList.add('hidden')
    getInputProject.classList.remove('hidden')
})

addProjectNameBtn.addEventListener('click',()=>{
    let projectNameInput =  document.querySelector('#project-name-input')
    let value = projectNameInput.value;
    projectNameInput.value = ''
    
    if (value.trim() === '') {
        alert('project name cant be blank')
        return;
    }
    createProject(value);
})

cancelProjectNameBtn.addEventListener('click',()=>{
    addProjectBtn.classList.remove('hidden')
    getInputProject.classList.add('hidden')
})





const modal = document.querySelector('#modal1')


const detailsBtn = document.querySelector('.details')
const modalCloseBtn = document.querySelector('.modal-close')
const dateSpan = document.querySelector('.date-span');

detailsBtn.addEventListener('click',()=>{
    // dateSpan.textContent = `${newDate}`
    modal.showModal();
})
modalCloseBtn.addEventListener('click',()=>{
    modal.close();
})