import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import { ThemeProvider }                           from '../context/ThemeContext';
import Home                                        from '../pages/home/Home';
import Login                                       from '../pages/auth/Login/Login';
import Signup                                      from '../pages/auth/SignUp/SignUp';
import Dashboard                                   from '../pages/dashboard/Dashboard';
import Terms                                       from '../pages/terms/Terms';
import                                                  './App.css';

function App() {

  return (

    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/login"      element={<Login />} />
            <Route path="/register"   element={<Signup />} />
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="/terms"      element={<Terms />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>

  );

}

export default App;