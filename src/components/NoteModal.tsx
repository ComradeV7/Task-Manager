import { useState } from 'react';
import type { Task } from '../types';
import './NoteModal.css';

type NoteModalProps = {
    task: Task;
    onClose: () => void;
    onSave: (id: number, noteText: string) => void;
};

export const NoteModal = ({ task, onClose, onSave }: NoteModalProps) => {
    const [noteText, setNoteText] = useState(task.note);

    const handleSave = () => {
        onSave(task.id, noteText);
        onClose();
    };

    return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Notes for: {task.text}</h3>
            <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} rows={10} placeholder="Add your notes here.." />
            <div className="modal-actions">
                <button onClick={onClose}>Close</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    </div>
    );
};
