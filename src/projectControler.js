import {projectFactory} from "./project.js";

const projectController = ()=>{
    function createProject(name){
        let project1 = projectFactory(name);
        storeInStorage(project1.projectName, project1.tasks)
    }
    function storeInStorage(name, task){
        window.localStorage.setItem(name, JSON.stringify(task));
    }
    function removeProject(name){
        window.localStorage.removeItem(name);
    }
    return { createProject, removeProject}
}
export {projectController}

