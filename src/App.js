import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
