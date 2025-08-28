import { TaskItem } from './TaskItem';
import type { Task } from '../types';
import { Droppable } from 'react-beautiful-dnd';

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
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index} // Pass the index for the Draggable component
              onDelete={onDeleteTask}
              onUpdatePriority={onUpdatePriority}
              onUpdateNote={onUpdateNote}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};
