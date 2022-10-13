import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AboutPage from './pages/about';
import SignIn from './pages/enter';
import HomePage from './pages/home';
import New from './pages/new';

function App() {
  return (<Router>
    <Routes>
    <Route path='/' element={< HomePage />}></Route>
      <Route path='/about' element={< AboutPage />}></Route>
      <Route path='/enter' element={< SignIn />}></Route>
      <Route path='/new' element={< New />}></Route>
      <Route path='/new' element={< New />}></Route>
    </Routes>
  </Router>

  );
}

export default App;
