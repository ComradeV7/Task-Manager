import type { Task } from '../types';
import { useState } from 'react';
import { NoteModal } from './NoteModal'
import PencilIcon from "../assets/pencil.svg?react";

type TaskItemProps = {
    task : Task;
    onDelete : (id : number) => void;
    onUpdatePriority: (id: number) => void;
    onUpdateNote: (id: number, note: string) => void;
};

export const TaskItem = ({ task, onDelete, onUpdatePriority, onUpdateNote }: TaskItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleActionClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const openModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsModalOpen(true);
    }

    return (
        <>
            <li className={`task-item ${task.priority}`}
                onClick={() => onUpdatePriority(task.id)}>
                <span>{task.text}</span>
                <div className="text-actions" onClick={handleActionClick}>
                    <button onClick={openModal} className="note-btn"><img src={PencilIcon} alt="Note"/></button>
                    <button onClick={() => onDelete(task.id)} className="delete-btn">x</button>
                </div>
            </li>
            {isModalOpen && (
                <NoteModal task={task} onClose={() => setIsModalOpen(false)} onSave={onUpdateNote} />
            )}
        </>
    );
};