import style from './style.css'
import { format, formatDate } from "date-fns";
import createProject from './dom';

const selectedProject = document.querySelector('.selected')
const addProjectBtn = document.querySelector('.add-project');
const getInputProject = document.querySelector('.get-input-project');
const addProjectNameBtn = document.querySelector('.add-project-btn')
const cancelProjectNameBtn = document.querySelector('.cancel-project-btn')


// project add 




addProjectBtn.addEventListener('click', () => {
    addProjectBtn.classList.add('hidden')
    getInputProject.classList.remove('hidden')
})

addProjectNameBtn.addEventListener('click', () => {
    let projectNameInput = document.querySelector('#project-name-input')
    let value = projectNameInput.value;
    projectNameInput.value = ''

    if (value.trim() === '') {
        alert('project name cant be blank')
        return;
    }
    createProject(value);
    addProjectBtn.classList.remove('hidden')
    getInputProject.classList.add('hidden')
})

cancelProjectNameBtn.addEventListener('click', () => {
    addProjectBtn.classList.remove('hidden')
    getInputProject.classList.add('hidden')
})




const modal = document.querySelector('#modal1')


const detailsBtn = document.querySelector('.details')
const modalCloseBtn = document.querySelector('.modal-close')
const dateSpan = document.querySelector('.date-span');

detailsBtn.addEventListener('click', () => {

    modal.showModal();
})
modalCloseBtn.addEventListener('click', () => {
    modal.close();
})




const taskName = document.querySelector('.taskName-span')
const descriptionName = document.querySelector('.descriptionName-span')
const date = document.querySelector('.date-span')
const prioritySpan = document.querySelector('.priorityName-span')

const interfaceTaskName = document.querySelector('.taskName')
const interfacedateName = document.querySelector('.date')
const priorityP = document.querySelector('.priorityP')


const taskContainer = document.querySelector('.task')


const taskAdder = document.querySelector('.task-adder')
const nameInput = document.querySelector('#name-input')
const descriptionInput = document.querySelector('#description-input')
const dateInput = document.querySelector('#dateInput')
const modal2 = document.querySelector('#modal2')


taskAdder.addEventListener('click', () => {
    modal2.showModal();
})

const addBtnModal2 = document.querySelector('#submitBtn')
const cancelBtnModal2 = document.querySelector('.cancel-project-btn')


const allProjects = document.querySelectorAll('.project-inner')

// allProjects.forEach()