
import './TaskForm.css';
import Tag from './Tag/Tag.jsx';
import { useState } from 'react';

const TaskForm = ({ setTasks }) => {

    const tags = ['HTML', 'CSS', 'JS', 'React'];

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prev => {
            return {
                ...prev, // Spread operator: tạo một bản sao mới của prev, tránh thay đổi trực tiếp state cũ (đảm bảo tính bất biến).
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        // Đây là một hàm dùng để ngăn hành vi mặc định của trình duyệt.
        // Với <form>, hành vi mặc định khi bạn bấm nút submit là: load lại trang (refresh page).
        // Khi bạn dùng React, bạn không muốn trình duyệt reload mỗi lần người dùng submit form, vì bạn xử lý logic bằng JavaScript.
        // 👉 Vì sao cần e.preventDefault()?
        // Nếu không dùng, khi bạn click nút + Add Task, trình duyệt sẽ reload → mất dữ liệu form, gây lag, không thể kiểm soát.
        // Khi dùng e.preventDefault(), bạn chặn reload, và xử lý submit bằng JavaScript (ở đây là console.log(taskData)).
        e.preventDefault();
        setTasks(prev => {
            return [
                ...prev,
                taskData
            ]
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
    };

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag);
    };

    const selectTag = (tag) => {
        if (checkTag(tag)) {
            const filterTask = taskData.tags.filter(item => item !== tag);
            setTaskData(prev => {
                return {
                    ...prev,
                    tags: filterTask
                }
            });
        } else {
            setTaskData(prev => {
                return {
                    ...prev,
                    tags: [...prev.tags, tag]
                }
            })
        }
    };

    // const [task, setTask] = useState('');
    // const [status, setStatus] = useState('');
    // const handleTaskChange = (e) => {
    //     setTask(e.target.value);
    // }
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value);
    // }
    // console.log(task, status);
    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type="text" className="task_input" placeholder="Enter you task"
                    name='task'
                    value={taskData.task}
                    onChange={handleChange} />
                <div className='task_form_bottom_line'>
                    <div>
                        {
                            tags.map(tag => (
                                <Tag key={tag} tagName={tag} selected={checkTag(tag)} selectTag={selectTag}></Tag>
                            ))
                        }
                    </div>
                    <div>
                        <select className='task_status' value={taskData.status} onChange={handleChange} name='status'>
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type="Submit" className="task_submit">+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    );
}

export default TaskForm;