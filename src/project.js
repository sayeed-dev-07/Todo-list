let projectFactory =  function(name){
    let projectName = name;
    let tasks = [];
    return {projectName, tasks}
}

export {projectFactory};