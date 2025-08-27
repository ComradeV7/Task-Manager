import { TaskItem } from './TaskItem';
import type { Task } from '../types';

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onUpdatePriority: (id: number) => void;
  onUpdateNote: (id: number, note: string) => void;
};

export const TaskList = ({
  tasks,
  onDeleteTask,
  onUpdatePriority,
  onUpdateNote
}: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask} 
          onUpdatePriority={onUpdatePriority}
          onUpdateNote={onUpdateNote}
        />
      ))}
    </ul>
  );
};
