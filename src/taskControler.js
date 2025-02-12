import taskCreate from './task.js';

const taskControler = () => {
    function getProject(){
        const selectedProject = document.querySelector('.selected');
        let projectName = selectedProject.innerText;
        return JSON.parse(localStorage.getItem(projectName));
    }
    function createTask(newTaskName, newTaskDescription, newTaskPriority, newTaskDate){
        let project = getProject()

        let newTask = taskCreate(newTaskName, newTaskDescription, newTaskPriority, newTaskDate);
        project.tasks.push(newTask);

        storeInStorage(project.projectName, project)
    }

    

    function updateInfo(newTaskName1, newTaskDes1, newTaskPriority1, newTaskDate1, index){
        let project =  getProject();
        let projectTask = project.tasks[index];

        projectTask.newTaskName = newTaskName1;
        projectTask.newTaskDescription = newTaskDes1;
        projectTask.newTaskPriority = newTaskPriority1;
        projectTask.newTaskDate = newTaskDate1;

        project.tasks[index] = projectTask;
        storeInStorage(project.projectName, project)
    }

    function deleteTask(index){
        let project = getProject();
        project.tasks.splice(Number(index), 1);
        storeInStorage(project.projectName, project)

    }

    function storeInStorage(projectName, storeTasks){
        window.localStorage.setItem(projectName, JSON.stringify(storeTasks))
    }
}

export {taskControler}