import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import Pacements from './Pacements';
import Academics1 from './Academics';
import FA1 from './FA';
import Achievements from './Achievements';
import Results1 from './Results';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path='/Results' element={<Results1/>}/>
          <Route path='/Achivements' element={<Achievements/>}/>
          <Route path='/FA' element={<FA1/>}/>
          <Route path='/Academics' element={<Academics1/>}/>
          <Route path="/placement" element={<Pacements />} />
          <Route path="/" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
