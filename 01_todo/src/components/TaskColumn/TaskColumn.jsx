
import TaskCard from '../TaskCard/TaskCard.jsx';
import './TaskColumn.css';

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_header'>
                <img className='task_column_icon' src={icon} alt="" />{" "}{title}
            </h2>
            {
                tasks.map((task, index) => {
                    if (task.status === status) {
                        return (<TaskCard key={index} task={task} handleDelete={handleDelete} index={index} />)
                    }
                })
            }
        </section>
    );
}

export default TaskColumn;