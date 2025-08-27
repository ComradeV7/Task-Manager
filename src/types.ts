export type TaskPriority = 'immediate' | 'shortTerm' | 'longTerm' ;
export type Task = {
    id : number;
    text : string;
    priority : TaskPriority;
    note : string;
};