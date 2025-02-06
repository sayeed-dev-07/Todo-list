const projectCatalog = document.querySelector('.project-catalog')



export default function createProjectName(name){
    const div = document.createElement('div')
    div.classList.add('project-inner');
    div.innerHTML = `
    <div class="project-icon">
                            <i class="fa-solid fa-user-check"></i>
                            <p class="project-name">${name}</p>
                        </div>
                        <div class="delete-icon">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                        
    `
    appendChild(div, projectCatalog)

}

function appendChild(child, parent){
    parent.appendChild(child);
}



const taskName = document.querySelector('.taskName');
const date = document.querySelector('.date');
const priority = document.querySelector('.priorityP')


function createDemoTasks(){
    const task = document.createElement('div')
    task.classList.add()

}


