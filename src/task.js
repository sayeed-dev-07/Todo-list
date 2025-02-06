const taskCreate = function(name, description, priority, date){
    let taskName = name;
    let taskDescription = description;
    let taskPriority = priority;
    let taskDate = date;

    return {taskName, taskDescription, taskPriority, taskDate}
}
export{taskCreate};