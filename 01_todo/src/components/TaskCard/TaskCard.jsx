import './TaskCard.css';
import Tag from '../Tag/Tag.jsx';
import DeleteIcon from '../../assets/delete.png';

const TaskCard = ({ task, handleDelete, index}) => {
    return (
        <article className='task_card'>
            <p className='task_text'>{task.task}</p>
            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {
                        task.tags.map((tag, index) => {
                            return <Tag key={index} tagName={tag} selected></Tag>;
                        })
                    }
                </div>
                <div className='task_delete' onClick={() => handleDelete(index)}>
                    <img src={DeleteIcon} className='delete_icon' alt="" />
                </div>
            </div>
        </article>
    );
}

export default TaskCard;