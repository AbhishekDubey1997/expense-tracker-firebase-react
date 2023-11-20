import './App.css';
import {Auth} from './pages/auth/index';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import { ExpenseTracker } from './pages/expense-tracker/index';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
       <Route path='/' exact element={<Auth/>}/>
       <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
