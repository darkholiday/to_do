import Realm from "realm";


export interface Task
{
    id: BigInteger;
    title: string,
    description: string,
    date: string,
    hour: string,
    isDone: boolean
}

export const TasksSchema =
{
    name: 'Tasks',
    primaryKey: 'id',
    properties:
    {
        id: 'int',
        title: 'string',
        description: 'string',
        date: 'string',
        hour: 'string',
        isDone: 'bool'
    },
};

/*export const openDatabase = () =>
{
    if(tasksRealm)
    {
        return tasksRealm;
    }
    else
    {
        return Realm.open({
            schema: [TasksSchema]
        });
    }

}*/

export const tasksRealm: Realm = new Realm({
    schema: [TasksSchema],
    schemaVersion: 5
});


let getAllTasks = ()  =>
{
    return tasksRealm.objects<Task>('Tasks');
}


let addNewTask = (task: Task) : Promise<any> =>
{
    task.id = getAllTasks().length + 1;

    return new Promise((resolve, reject) =>
    {
        try
        {
            tasksRealm.write(() =>
            {
                tasksRealm.create<Task>('Tasks', task);
            });
            resolve(true);
        }
        catch(e)
        {
            reject();
        }
    });
}

let getTaskByID = (_id) : Task =>
{
    return tasksRealm.objects<Task>('Tasks').filtered(`id = ${_id}`);
}


let updateIsDone = (_id) =>
{

    tasksRealm.write(() => {
        let task = getTaskByID(_id)[0];
        task.isDone = !task.isDone;
    });
}

let updateTask = (task: Task): Promise<any>  =>
{
    return new Promise((resolve, reject) =>
    {
        try
        {
            tasksRealm.write(() =>
            {
                let localTask = getTaskByID(task.id)[0];
                localTask.title = task.title;
                localTask.description = task.description;
                localTask.date = task.date;
                localTask.hour = task.hour;
                localTask.isDone = task.isDone;
            });
            resolve(true);
        }
        catch(e)
        {
            reject();
        }
    });
};


let deleteTask = (_id): Promise<any>  =>
{
    return new Promise((resolve, reject) =>
    {
        try
        {
            tasksRealm.write(() =>
            {
                tasksRealm.delete(getTaskByID(_id)[0]);
            });
        }
        catch(e)
        {
            reject();
        }
    });
}


export {addNewTask, getAllTasks, getTaskByID, updateIsDone, updateTask, deleteTask}