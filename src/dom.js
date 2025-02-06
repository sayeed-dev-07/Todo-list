const projectCatalog = document.querySelector('.project-catalog')



export default function createProject(name){
    const div = document.createElement('div')
    div.classList.add('project-inner');
    div.innerHTML = `
    <div class="project-icon">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                        <p class="project-name">${name}</p>
    `
    appendChild(div, projectCatalog)

}

function appendChild(child, parent){
    parent.appendChild(child);
}



const taskName = document.querySelector('.taskName');
const date = document.querySelector('.date');
const priority = document.querySelector('.priorityP')
function addDetailsToModal(name, description, date, priority){

}
function addDetailsToDom(name, date, priority){

}

