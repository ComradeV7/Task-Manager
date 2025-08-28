import { useState, useEffect } from 'react';
import { DragDropContext, type DropResult } from 'react-beautiful-dnd';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import type { Task, TaskPriority } from './types';
import './App.css';

const PRIORITY_ORDER: TaskPriority[] = ['shortTerm', 'immediate', 'longTerm'];
function App() {
  const  [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask : Task = {
      id: Date.now(),
      text,
      priority: 'shortTerm',
      note: '',
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (id : number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const updateTaskPriority = (id: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => {
        if (task.id === id){
          const currentIndex = PRIORITY_ORDER.indexOf(task.priority);
          const nextIndex = (currentIndex + 1) % PRIORITY_ORDER.length;
          const newPriority = PRIORITY_ORDER[nextIndex];
          return { ...task, priority: newPriority};
        }
        return task;
      })
    );
  };

  const updateTaskNote = (id: number, newNote: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, note: newNote } : task
      )
    );
  };

  const handleDragEnd = (result: DropResult) => {
  const { source, destination } = result;

    // 1. Do nothing if the item was dropped outside a valid area
    if (!destination) {
      return;
    }

    // 2. Do nothing if the item was dropped in the same place
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // 3. Reorder the list
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    setTasks(items);
  };


  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="App">
        <h1>TO-DO LIST</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdatePriority={updateTaskPriority}
          onUpdateNote={updateTaskNote}
        />
      </div>
    </DragDropContext>
  );
}

export default App;