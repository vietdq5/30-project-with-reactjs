import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import AppRouting from './AppRouting.jsx';

function App() {

  return (
    <div className='app'>
      <Navbar />

      <main className='app_main'>
        <AppRouting />
      </main>
    </div>
  )
}

export default App
