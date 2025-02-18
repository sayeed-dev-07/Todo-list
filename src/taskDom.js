const taskContainer = document.querySelector('.task-container');


const taskCreateFactory = ()=>{
    function createTask(name, descritption, priority, date, index){
        const innerContainer = document.createElement('div');
        innerContainer.setAttribute('id', index)
        innerContainer.classList.add('task')
        const taskOuterdiv = document.createElement('div');
        taskOuterdiv.classList.add('task-inner-div');
        taskOuterdiv.innerHTML = `
        <input id="checkbox" type="checkbox">
                        <p class="taskName">${name}</p>
                        <p class="date"><span>Due:</span>${date}</p>
                        <p class="priorityP"><span>Priority:</span>${priority}</p>
        `

        innerContainer.appendChild(taskOuterdiv);
        taskContainer.appendChild(innerContainer)
    }
    function emptyNoticeCreate(){
        const p = document.createElement('p');
        p.classList.add('notice');
        p.innerText = `Project has no tasks!`

        taskContainer.appendChild(p)
    };
    function deleteAllNotices(){
        let notices = Array.from(document.querySelectorAll('.notice'));
        for (let i = 0; i < notices.length; i++) {
            taskContainer.removeChild(notices[i]);
        }
    }

    function deleteAllTask(){
        const tasks = Array.from(document.querySelectorAll('.task'));
        for (let i = 0; i < tasks.length; i++) {
            taskContainer.removeChild(tasks[i]);
            
        }
    }
    function deleteSingleTask(index){
        const tasks = Array.from(document.querySelectorAll('.task'));

        for (let i = 0; i < tasks.length; i++) {
            let id = tasks[i].id;

            if(id === index){
                taskContainer.removeChild(tasks[id]);
            }
        }
    }
    function openModal(){
        const modal = document.querySelector('#modal2');
        const formTitle = document.querySelector('.formTitle');
        if(modal.contains(formTitle)){
            modal.removeChild(formTitle)
        }
        modal.showModal();
    }
    function closeModal(){
        const modal = document.querySelector('#modal2');
        modal.close();
        clearFormFields()
    }
    function editTaskForm(){
        const formTitle = document.querySelector('.formTitle');
        formTitle.textContent = `Edit Form`;
    }
    function clearFormFields(){
        
        document.forms['form'].reset();
    }
    function populateDetailsOnEdit(index){
        let tasks = document.querySelectorAll('.task');
        let currentTask = tasks[index];

        const taskName = document.querySelector()
        const taskDescription = userTaskDetailContainer.children[1].textContent.slice(18);
        const taskDueDate = userTaskDetailContainer.children[2].textContent.slice(10);
        const taskPriority = userTaskDetailContainer.children[3].textContent.slice(10);
        const taskNotes = userTaskDetailContainer.children[5].textContent;

        let taskNameField = document.querySelector("#edit-title");
        let taskDescriptionField = document.querySelector("#edit-description");
        let taskDueDateField = document.querySelector("#edit-date");
        let taskPriorityField = document.querySelector("#edit-priority");
        let taskNotesField = document.querySelector("#edit-notes");

    }



    
}