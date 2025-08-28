import type { Task } from "../types";
import { useState } from "react";
import { NoteModal } from "./NoteModal";
import PencilIcon from "../assets/pencil.svg?react";
import { Draggable } from "react-beautiful-dnd";

type TaskItemProps = {
  task: Task;
  index: number;
  onDelete: (id: number) => void;
  onUpdatePriority: (id: number) => void;
  onUpdateNote: (id: number, note: string) => void;
};

export const TaskItem = ({
  task,
  index,
  onDelete,
  onUpdatePriority,
  onUpdateNote,
}: TaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <>
          <li
            className={`task-item ${task.priority}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span onClick={() => onUpdatePriority(task.id)}>{task.text}</span>
            <div className="task-actions" onClick={handleActionClick}>
              <button onClick={openModal} className="icon-btn note-btn">
                {/* CORRECTED: Use the imported URL in the src attribute */}
                <img src={PencilIcon} alt="Note" />
              </button>
              <button onClick={() => onDelete(task.id)} className="delete-btn">
                x
              </button>
            </div>
          </li>
          {isModalOpen && (
            <NoteModal
              task={task}
              onClose={() => setIsModalOpen(false)}
              onSave={onUpdateNote}
            />
          )}
        </>
      )}
    </Draggable>
  );
};
