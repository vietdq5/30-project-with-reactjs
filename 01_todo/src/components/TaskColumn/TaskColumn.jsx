
import React from 'react';
import DropArea from '../DropArea/DropArea.jsx';
import TaskCard from '../TaskCard/TaskCard.jsx';
import './TaskColumn.css';

const TaskColumn = ({ title, icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_header'>
                <img className='task_column_icon' src={icon} alt="" />{" "}{title}
            </h2>
            <DropArea onDrop={() => onDrop(status, 0)} />
            {
                tasks.map((task, index) => {
                    if (task.status === status) {
                        return (
                            <React.Fragment key={index}>
                                <TaskCard task={task} handleDelete={handleDelete} index={index} setActiveCard={setActiveCard} />
                                <DropArea onDrop={() => onDrop(status, index + 1)} />
                            </React.Fragment>

                        )
                    }
                })
            }
        </section>
    );
}

export default TaskColumn;