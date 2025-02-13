const projectCreate = () => {
    
    const projectCatalog = document.querySelector('.project-catalog')

    function addNewProject(projectName) {
        const projectInner = document.createElement('div')
        projectInner.classList.add('project-inner');
        const projectIcon = document.createElement('project-icon');
        projectIcon.innerHTML = `
        <i class="fa-solid fa-user-check"></i>
                            <p class="project-name ">${projectName}</p>
        
        `
        const deleteIcon = document.createElement('div');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.innerHTML = `
        <i class="fa-solid fa-trash-can"></i>
        `
        projectInner.appendChild(projectIcon);
        projectInner.appendChild(deleteIcon);
        projectCatalog.appendChild(projectInner)
    }
    function activeProjectSelect(index){
        let projects = Array.from(document.querySelectorAll('.project-inner'));
        projects[index].classList.add('selected')
    };
    function removeActiveProject(index){
        let project = Array.from(document.querySelectorAll(".project-inner"));
        project[index].classList.remove("selected");
    }
    function removeActiveProjectFromAll(){
        let projects = Array.from(document.querySelectorAll(".project-inner"));
        for (let i = 0; i < projects.length; i++) {
            projects[i].classList.remove('selected');  
        }
    }

    
}