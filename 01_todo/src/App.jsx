import './App.css'
import TaskForm from './components/TaskForm.jsx'
import TaskColumn from './components/TaskColumn/TaskColumn.jsx';
import TodoIcon from './assets/direct-hit.png';
import DoingIcon from './assets/glowing-star.png';
import DoneIcon from './assets/check-mark-button.png';
import { useState, useEffect } from 'react';

const oldTasks = localStorage.getItem('tasks');

const App = () => {
  var tabs = [
    {
      title: "To do",
      status_key: "todo",
      icon: TodoIcon
    },
    {
      title: "Doing",
      status_key: "doing",
      icon: DoingIcon
    },
    {
      title: "Done",
      status_key: "done",
      icon: DoneIcon
    }
  ];
  // hook
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  // functions
  const handleDeleteTask = (taskIndex) => {
    var newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks}></TaskForm>
      <main className='app_main'>
        {
          tabs.map((tab, index) => (
            <TaskColumn key={index} title={tab.title} icon={tab.icon} tasks={tasks} status={tab.status_key} handleDelete={handleDeleteTask}></TaskColumn>
          ))
        }
      </main>
    </div>
  )
}

export default App
